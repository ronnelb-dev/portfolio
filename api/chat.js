const DEFAULT_ALLOWED_ORIGINS = [
  'http://localhost:3000',
  'https://ronnelb-dev.github.io',
  'https://ronnelb-dev.github.io/portfolio',
];

const PORTFOLIO_CONTEXT = `
Ronnel Barashari is a full-stack web and mobile developer.
Core skills: React, JavaScript, TypeScript, Tailwind CSS, Bootstrap, Node.js, PHP, Laravel, MySQL, React Native, Flutter, Android, Git, npm, and Jira.
Services: web application development, mobile app development, API and backend development, queue and appointment systems, and system maintenance or improvements.
Service audiences: healthcare providers, SMEs, service-based businesses, operations teams, startups, app owners, hospitals, clinics, government offices, and businesses with existing apps or legacy systems.
Process: discovery and workflow mapping, UX structure and technical planning, iterative development and testing, deployment, handoff, and ongoing support.
Contact email: barasharironnel29@gmail.com.
LinkedIn: https://www.linkedin.com/in/ronnel-barashari/.
GitHub: https://github.com/ronnelb-dev.
Portfolio highlights:
- Kaizen Daily: full-stack SaaS life operating system built with React Router v7, TypeScript, Prisma, PostgreSQL, Neon, Vercel, Stripe, Resend, TailwindCSS, and Node.js.
- Powerhouse Church Website: Next.js, TailwindCSS, TypeScript, YouTube API, and Vercel church website.
- JFAAC Katsutadai Church Website: bilingual church website for Japan built with Next.js, TailwindCSS, TypeScript, and Vercel.
- Better Swing Trader Website: swing trading web platform with AI chatbot assistant, subscriber database, blog, guide, PHP, MySQL, PHPMailer, Zapier, JavaScript, and TailwindCSS.
- Our Wedding Website: Next.js, TailwindCSS, TypeScript, MySQL, Supabase, and Cloudinary wedding website.
- Better Swing Trader Mobile App: React Native mobile analytics app for iOS and Android with trade tracking, charts, REST API sync, and offline-first storage.
- Queue Management System: PHP, JavaScript, MySQL, Socket.io queue management web app for The Medical City South Luzon.
Pricing guidance: Ronnel does not publish fixed prices on the portfolio. Pricing depends on scope, platform, timeline, integrations, and maintenance needs. Invite visitors to email Ronnel to discuss a quote.
`;

const SYSTEM_PROMPT = `
You are "Chat with Ronnel", a portfolio assistant that answers as Ronnel Barashari.
Use only the portfolio context below and the conversation history.
Be friendly, concise, specific, and professional.
You may answer questions about Ronnel's projects, services, experience, tech stack, process, contact options, and general project fit.
Do not invent private details, exact prices, timelines, guarantees, client information, credentials, or facts that are not in the context.
If pricing is requested, explain that pricing depends on project scope and invite the visitor to email Ronnel.
If the question is outside portfolio scope, briefly redirect to Ronnel's services, projects, or contact options.
If you do not know, say so and suggest contacting Ronnel at barasharironnel29@gmail.com.

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

function setCorsHeaders(req, res) {
  const requestOrigin = req.headers.origin;
  const allowedOrigins = getAllowedOrigins();
  const allowedOrigin = allowedOrigins.includes(requestOrigin)
    ? requestOrigin
    : allowedOrigins[0];

  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function normalizeMessages(messages) {
  if (!Array.isArray(messages)) {
    return [];
  }

  return messages
    .filter((message) => message && typeof message.content === 'string')
    .slice(-8)
    .map((message) => ({
      role: message.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: message.content.slice(0, 1000) }],
    }));
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

module.exports = async function handler(req, res) {
  setCorsHeaders(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'Gemini API key is not configured.' });
  }

  const requestBody = parseRequestBody(req.body);
  const contents = normalizeMessages(requestBody.messages);

  if (contents.length === 0) {
    return res.status(400).json({ error: 'A message is required.' });
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
      return res.status(response.status).json({
        error:
          data?.error?.message ||
          'Gemini could not answer right now. Please try again later.',
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
    return res.status(500).json({
      error: 'The chat service is unavailable right now. Please try again later.',
    });
  }
};
