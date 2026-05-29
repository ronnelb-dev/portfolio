import { useEffect, useRef, useState } from 'react';
import { FiMessageCircle, FiSend, FiX } from 'react-icons/fi';
import profileImage from '../Images/logo192.png';

const MAX_MESSAGE_LENGTH = 1000;
const CHAT_API_URL = process.env.REACT_APP_CHAT_API_URL || '/api/chat';

const INITIAL_MESSAGE = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hi there! Thanks for visiting my website. Feel free to ask me about my projects, services, experience, tech stack, pricing, or how to contact me.",
};

const ChatWithRonnel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const canSend = inputValue.trim().length > 0 && !isSending;

  useEffect(() => {
    if (!isOpen) return;

    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isOpen, isSending]);

  useEffect(() => {
    if (!isOpen) return;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => window.clearTimeout(focusTimer);
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmedMessage = inputValue.trim();

    if (!trimmedMessage || isSending) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmedMessage,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInputValue('');
    setError('');
    setIsSending(true);

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
      setError(
        requestError.message ||
          'Something went wrong while sending your message. Please try again.',
      );
    } finally {
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

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <section
          aria-label="Chat with Ronnel"
          className="fixed bottom-4 left-4 right-4 flex max-h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-cyan-950/20 dark:border-gray-700 dark:bg-gray-900 sm:bottom-6 sm:left-auto sm:right-6 sm:h-[560px] sm:w-[380px]"
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
                Online
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <FiX className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-4 dark:bg-gray-950/60">
            <div className="space-y-4">
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
                          ? 'rounded-br-md bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/20'
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
                    Ronnel is typing...
                  </span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </div>

          {error && (
            <p className="border-t border-red-100 bg-red-50 px-4 py-2 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200">
              {error}
            </p>
          )}

          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-900"
          >
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
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/20 transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
              >
                <FiSend className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between gap-3 text-xs text-gray-500 dark:text-gray-400">
              <span>Ask me about web, mobile, backend, or pricing.</span>
              <span aria-live="polite">{inputValue.length}/1000</span>
            </div>
          </form>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex min-h-12 items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-4 py-3 text-white shadow-2xl shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
          aria-label="Open Chat with Ronnel"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
            <FiMessageCircle className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-sm font-bold">Chat with Ronnel</span>
        </button>
      )}
    </div>
  );
};

export default ChatWithRonnel;
