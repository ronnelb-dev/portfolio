const DEFAULT_ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://ronnelb-dev.github.io',
  'https://ronnelb-dev.github.io/portfolio',
];

const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_MESSAGES = 8;
const DEFAULT_RATE_LIMIT_WINDOW_MS = 60 * 1000;
const DEFAULT_RATE_LIMIT_MAX_REQUESTS = 20;
const { buildPortfolioContext } = require('./chatContext');

// In-memory rate limiting is a lightweight fallback for this small Vercel
// function. For stronger production abuse protection, replace this with
// Vercel KV or Upstash Redis so limits are shared across serverless instances.
const rateLimitStore = new Map();

const PORTFOLIO_CONTEXT = buildPortfolioContext();

const SYSTEM_PROMPT = `
You are "Chat with Ronnel", a portfolio assistant for Ronnel Barashari.
Use only the portfolio context below and the conversation history.
Be friendly, concise, specific, and professional.
Write in a friendly first-person style when discussing Ronnel's work, but do not claim to be actively speaking live as Ronnel.
You may answer questions about Ronnel's projects, services, experience, tech stack, process, contact options, and general project fit.
Do not invent private details, exact prices, timelines, guarantees, client information, credentials, or facts that are not in the context.
If pricing is requested, explain that pricing depends on project scope and invite the visitor to email Ronnel.
If the question is outside portfolio scope, briefly redirect to Ronnel's services, projects, or contact options.
If you do not know, say so and suggest contacting Ronnel at barasharironnel29@gmail.com.
When relevant, end with a helpful next step such as asking for the project scope or suggesting the visitor contact Ronnel.

Portfolio context:
${PORTFOLIO_CONTEXT}
`;

function getAllowedOrigins() {
  const configuredOrigins = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);

  const vercelOrigin = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';

  return [...DEFAULT_ALLOWED_ORIGINS, ...configuredOrigins, vercelOrigin].filter(Boolean);
}

function getOriginStatus(req) {
  const requestOrigin = req.headers.origin;
  const allowedOrigins = getAllowedOrigins();

  return {
    allowedOrigins,
    isAllowed: Boolean(requestOrigin && allowedOrigins.includes(requestOrigin)),
    requestOrigin,
  };
}

function setCorsHeaders(req, res) {
  const { isAllowed, requestOrigin } = getOriginStatus(req);

  if (isAllowed) {
    res.setHeader('Access-Control-Allow-Origin', requestOrigin);
  }

  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function validateAndNormalizeMessages(messages) {
  if (!Array.isArray(messages)) {
    return { error: 'Messages must be an array.' };
  }

  const recentMessages = messages.slice(-MAX_HISTORY_MESSAGES);
  const normalizedMessages = [];

  for (const message of recentMessages) {
    if (!message || typeof message.content !== 'string') {
      return { error: 'Each message needs text content.' };
    }

    if (!['user', 'assistant'].includes(message.role)) {
      return { error: 'Message roles must be user or assistant.' };
    }

    const content = message.content.trim();

    if (!content) {
      return { error: 'Message content cannot be empty.' };
    }

    if (content.length > MAX_MESSAGE_LENGTH) {
      return { error: `Messages must be ${MAX_MESSAGE_LENGTH} characters or fewer.` };
    }

    normalizedMessages.push({
      role: message.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: content }],
    });
  }

  if (normalizedMessages.length === 0) {
    return { error: 'A message is required.' };
  }

  return { contents: normalizedMessages };
}

function parseRequestBody(body) {
  if (typeof body !== 'string') {
    return body || {};
  }

  try {
    return JSON.parse(body);
  } catch (error) {
    return {};
  }
}

function extractReply(data) {
  return data?.candidates?.[0]?.content?.parts
    ?.map((part) => part.text)
    .filter(Boolean)
    .join('\n')
    .trim();
}

function getClientIp(req) {
  const forwardedFor = req.headers['x-forwarded-for'];

  if (typeof forwardedFor === 'string' && forwardedFor.trim()) {
    return forwardedFor.split(',')[0].trim();
  }

  return req.socket?.remoteAddress || 'unknown';
}

function isRateLimited(req) {
  const now = Date.now();
  const windowMs = Number(process.env.RATE_LIMIT_WINDOW_MS) || DEFAULT_RATE_LIMIT_WINDOW_MS;
  const maxRequests =
    Number(process.env.RATE_LIMIT_MAX_REQUESTS) || DEFAULT_RATE_LIMIT_MAX_REQUESTS;
  const key = getClientIp(req);
  const current = rateLimitStore.get(key);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  current.count += 1;
  return current.count > maxRequests;
}

module.exports = async function handler(req, res) {
  setCorsHeaders(req, res);

  const { isAllowed } = getOriginStatus(req);

  if (!isAllowed) {
    return res.status(403).json({ error: 'This chat endpoint is not available from this origin.' });
  }

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (isRateLimited(req)) {
    return res.status(429).json({
      error: 'Too many chat requests. Please wait a minute and try again.',
    });
  }

  const requestBody = parseRequestBody(req.body);
  const { contents, error: validationError } = validateAndNormalizeMessages(requestBody.messages);

  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({
      error: 'The chat service is not configured yet. Please contact Ronnel by email.',
    });
  }

  try {
    const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 350,
          },
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API error', {
        status: response.status,
        message: data?.error?.message,
      });

      return res.status(response.status).json({
        error: 'The chat service is temporarily unavailable. Please try again later.',
      });
    }

    const reply = extractReply(data);

    if (!reply) {
      return res.status(502).json({
        error: 'Gemini returned an empty response. Please try again.',
      });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error('Chat API error', error);

    return res.status(500).json({
      error: 'The chat service is unavailable right now. Please try again later.',
    });
  }
};
