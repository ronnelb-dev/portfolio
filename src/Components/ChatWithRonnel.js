import { useEffect, useRef, useState } from 'react';
import { FiMail, FiMessageCircle, FiRefreshCw, FiSend, FiX } from 'react-icons/fi';
import profileImage from '../Images/logo192.png';

const MAX_MESSAGE_LENGTH = 1000;
const REQUEST_TIMEOUT_MS = 20000;
const CHAT_SESSION_STORAGE_KEY = 'ronnel-chat-session-v1';
const MAX_PERSISTED_MESSAGES = 12;
const CHAT_API_URL = process.env.REACT_APP_CHAT_API_URL || '/api/chat';
const CONTACT_EMAIL = 'barasharironnel29@gmail.com';

const INITIAL_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hi there! Thanks for visiting my portfolio. Feel free to ask me about my projects, experience, tech stack, build process, or how to contact me.",
};

const QUICK_PROMPTS = [
  'What kind of apps do you build?',
  'Which project shows your best work?',
  'What tech stack do you use?',
  'How can I contact you?',
];

const isPersistableMessage = (message) =>
  message &&
  (message.role === 'user' || message.role === 'assistant') &&
  typeof message.content === 'string' &&
  message.content.trim().length > 0 &&
  message.content.length <= MAX_MESSAGE_LENGTH;

const normalizePersistedMessages = (messagesToValidate) => {
  if (!Array.isArray(messagesToValidate)) {
    return [];
  }

  return messagesToValidate
    .filter(isPersistableMessage)
    .slice(-MAX_PERSISTED_MESSAGES)
    .map((message, index) => ({
      id: `restored-${index}-${message.role}`,
      role: message.role,
      content: message.content.trim(),
    }));
};

const loadSessionMessages = () => {
  if (typeof window === 'undefined') {
    return [INITIAL_MESSAGE];
  }

  try {
    const storedMessages = window.sessionStorage.getItem(CHAT_SESSION_STORAGE_KEY);

    if (!storedMessages) {
      return [INITIAL_MESSAGE];
    }

    const restoredMessages = normalizePersistedMessages(JSON.parse(storedMessages));
    return [INITIAL_MESSAGE, ...restoredMessages];
  } catch (storageError) {
    try {
      window.sessionStorage.removeItem(CHAT_SESSION_STORAGE_KEY);
    } catch (removeError) {
      // Ignore unavailable storage so the chat remains usable.
    }

    return [INITIAL_MESSAGE];
  }
};

const persistSessionMessages = (messagesToPersist) => {
  if (typeof window === 'undefined') {
    return;
  }

  const safeMessages = normalizePersistedMessages(
    messagesToPersist.filter((message) => message.id !== INITIAL_MESSAGE.id),
  ).map(({ role, content }) => ({ role, content }));

  try {
    window.sessionStorage.setItem(CHAT_SESSION_STORAGE_KEY, JSON.stringify(safeMessages));
  } catch (storageError) {
    // Ignore unavailable storage so private browsing or quota limits never break chat.
  }
};

const isChatApiLikelyMissing = () => {
  if (CHAT_API_URL !== '/api/chat' || typeof window === 'undefined') {
    return false;
  }

  const { hostname } = window.location;
  return hostname.endsWith('github.io');
};

const ChatWithRonnel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(loadSessionMessages);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [lastFailedMessage, setLastFailedMessage] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);

  const canSend = inputValue.trim().length > 0 && !isSending;

  useEffect(() => {
    persistSessionMessages(messages);
  }, [messages]);

  useEffect(() => {
    if (!isOpen) return;

    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isOpen, isSending]);

  useEffect(() => {
    if (!isOpen) return;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => window.clearTimeout(focusTimer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        window.setTimeout(() => launcherRef.current?.focus(), 0);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const closeChat = () => {
    setIsOpen(false);
    window.setTimeout(() => launcherRef.current?.focus(), 0);
  };

  const sendMessage = async (messageText = inputValue) => {
    const trimmedMessage = messageText.trim();

    if (!trimmedMessage || isSending) return;

    if (isChatApiLikelyMissing()) {
      setError(
        'Chat is not connected yet. Please email me directly or configure REACT_APP_CHAT_API_URL.',
      );
      setLastFailedMessage(trimmedMessage);
      return;
    }

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmedMessage,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInputValue('');
    setError('');
    setLastFailedMessage('');
    setIsSending(true);

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: nextMessages
            .filter((message) => message.id !== INITIAL_MESSAGE.id)
            .slice(-8)
            .map(({ role, content }) => ({ role, content })),
        }),
        signal: controller.signal,
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'The chat service is unavailable right now.');
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content:
            data.reply ||
            "I could not generate a response just now. Please email me at barasharironnel29@gmail.com.",
        },
      ]);
    } catch (requestError) {
      setLastFailedMessage(trimmedMessage);
      setError(
        requestError.name === 'AbortError'
          ? 'The chat took too long to respond. Please try again or email me directly.'
          : requestError.message ||
              'Something went wrong while sending your message. Please try again.',
      );
    } finally {
      window.clearTimeout(timeoutId);
      setIsSending(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  const handleQuickPrompt = (prompt) => {
    setInputValue(prompt);
    sendMessage(prompt);
  };

  return (
    <div className="fixed bottom-[calc(0.875rem+env(safe-area-inset-bottom))] right-3 z-50 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <section
          aria-label="Chat with Ronnel"
          className="fixed bottom-[calc(0.875rem+env(safe-area-inset-bottom))] left-3 right-3 flex max-h-[calc(100dvh-1.75rem-env(safe-area-inset-bottom))] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-cyan-950/10 dark:border-gray-700 dark:bg-gray-900 sm:bottom-6 sm:left-auto sm:right-6 sm:h-[560px] sm:w-[380px]"
        >
          <header className="flex min-h-[72px] items-center gap-3 border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
            <img
              src={profileImage}
              alt="Ronnel Barashari"
              className="h-11 w-11 flex-shrink-0 rounded-full border border-cyan-100 object-cover dark:border-cyan-500/30"
            />
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-base font-bold text-gray-900 dark:text-white">
                Chat with Ronnel
              </h2>
              <p className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                Portfolio assistant
              </p>
            </div>
            <button
              type="button"
              onClick={closeChat}
              aria-label="Close chat"
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <FiX className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-4 dark:bg-gray-950/60">
            <div
              className="space-y-4"
              role="log"
              aria-live="polite"
              aria-relevant="additions"
            >
              {messages.map((message) => {
                const isUser = message.role === 'user';

                return (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <img
                        src={profileImage}
                        alt=""
                        className="mt-1 h-7 w-7 flex-shrink-0 rounded-full object-cover"
                      />
                    )}
                    <div
                      className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        isUser
                          ? 'rounded-br-md bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-md'
                          : 'rounded-bl-md bg-white text-gray-800 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-700'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                );
              })}

              {isSending && (
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <img
                    src={profileImage}
                    alt=""
                    className="h-7 w-7 rounded-full object-cover"
                  />
                  <span className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
                    Portfolio assistant is typing...
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {error && (
            <div className="space-y-2 border-t border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200">
              <p>{error}</p>
              <div className="flex flex-wrap gap-2">
                {lastFailedMessage && (
                  <button
                    type="button"
                    onClick={() => sendMessage(lastFailedMessage)}
                    disabled={isSending}
                    className="inline-flex min-h-9 items-center gap-2 rounded-full border border-red-200 bg-white px-3 py-1.5 font-semibold text-red-700 transition hover:bg-red-100 focus:outline-none focus:ring-4 focus:ring-red-300/40 disabled:opacity-60 dark:border-red-800 dark:bg-red-950 dark:text-red-100 dark:hover:bg-red-900"
                  >
                    <FiRefreshCw className="h-4 w-4" aria-hidden="true" />
                    Retry
                  </button>
                )}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border border-red-200 bg-white px-3 py-1.5 font-semibold text-red-700 transition hover:bg-red-100 focus:outline-none focus:ring-4 focus:ring-red-300/40 dark:border-red-800 dark:bg-red-950 dark:text-red-100 dark:hover:bg-red-900"
                >
                  <FiMail className="h-4 w-4" aria-hidden="true" />
                  Email Ronnel
                </a>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 bg-white p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] dark:border-gray-700 dark:bg-gray-900 sm:pb-3"
          >
            <div className="relative mb-3 max-w-full overflow-hidden">
              <div
                role="group"
                aria-label="Suggested questions"
                className="flex max-w-full flex-nowrap gap-2 overflow-x-auto overscroll-x-contain pb-1 pr-8 no-scrollbar [-webkit-overflow-scrolling:touch]"
              >
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => handleQuickPrompt(prompt)}
                    disabled={isSending}
                    className="min-h-9 flex-shrink-0 whitespace-nowrap rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-700 transition hover:border-cyan-300 hover:bg-cyan-100 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 disabled:opacity-60 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-200 dark:hover:bg-cyan-500/20"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white to-transparent dark:from-gray-900" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent dark:from-gray-900" aria-hidden="true" />
            </div>
            <div className="flex items-end gap-2">
              <label htmlFor="chat-message" className="sr-only">
                Type a message
              </label>
              <textarea
                ref={inputRef}
                id="chat-message"
                rows="1"
                value={inputValue}
                maxLength={MAX_MESSAGE_LENGTH}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="min-h-[48px] flex-1 resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500"
              />
              <button
                type="submit"
                disabled={!canSend}
                aria-label="Send message"
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-md transition hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FiSend className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
              <span>Ask me about web, mobile, backend, or projects.</span>
              <span aria-live="polite">{inputValue.length}/1000</span>
            </div>
          </form>
        </section>
      ) : (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex h-12 min-h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 p-0 text-white shadow-lg shadow-cyan-500/20 transition active:scale-[0.98] hover:shadow-cyan-500/25 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 sm:w-auto sm:gap-3 sm:px-4 sm:py-3"
          aria-label="Open Chat with Ronnel"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
            <FiMessageCircle className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="hidden text-sm font-bold sm:inline">Chat with Ronnel</span>
        </button>
      )}
    </div>
  );
};

export default ChatWithRonnel;
