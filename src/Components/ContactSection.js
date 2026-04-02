import React from 'react';
import { Slide } from 'react-awesome-reveal';
import myResume from '../Files/ronnel_resume.pdf';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ronnel-barashari/',
    hoverBg: 'hover:bg-blue-600',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ronnelb-dev',
    hoverBg: 'hover:bg-gray-800',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

const CONTACT_CARDS = [
  {
    title: 'Email',
    value: 'barasharironnel29@gmail.com',
    href: 'mailto:barasharironnel29@gmail.com',
    displayValue: 'barasharironnel29@gmail.com',
    iconBg: 'from-cyan-500 to-blue-500',
    textColor: 'text-cyan-600 dark:text-cyan-400',
    hoverBorder: 'hover:border-cyan-300 dark:hover:border-cyan-500/50',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Resume',
    value: myResume,
    href: myResume,
    displayValue: 'Download my resume',
    iconBg: 'from-emerald-500 to-green-500',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    hoverBorder: 'hover:border-emerald-300 dark:hover:border-emerald-500/50',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

class ContactSection extends React.Component {
  render() {
    return (
      <section
        id="contact"
        className="relative min-h-screen py-20 sm:py-24 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-black"
      >
        {/* Background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="max-w-3xl mx-auto relative">

          {/* ── Section header ── */}
          <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
              <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 animate-gradient-shift bg-[length:200%_auto] mb-4">
              Get In Touch
            </h1>
            <div className="h-px w-20 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 rounded-full" />
          </div>

          <Slide direction="up" triggerOnce>
            <div className="space-y-5">

              {/* ── Main card ── */}
              <div className="relative bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700/50 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative space-y-8">

                  {/* Intro */}
                  <p className="text-center text-gray-600 dark:text-gray-300 text-sm sm:text-lg leading-relaxed max-w-xl mx-auto">
                    Feel free to reach out if you have any inquiries or would like to discuss potential projects. I'm always excited to take on new challenges!
                  </p>

                  {/* Contact cards — stack on mobile, 2-col on sm+ */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {CONTACT_CARDS.map((card) => (
                      <div
                        key={card.title}
                        className={`group bg-gray-50 dark:bg-gray-800/40 p-4 sm:p-5 rounded-xl border border-gray-200 dark:border-gray-700/50 ${card.hoverBorder} hover:shadow-lg transition-all duration-300`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 bg-gradient-to-br ${card.iconBg} rounded-xl shadow-md group-hover:scale-110 transition-transform flex-shrink-0`}>
                            {card.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-0.5 uppercase tracking-wide">{card.title}</p>
                            <a
                              href={card.href}
                              className={`${card.textColor} font-medium hover:underline text-sm truncate block`}
                            >
                              {card.displayValue}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA buttons — full-width on mobile */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="mailto:barasharironnel29@gmail.com"
                      className="group relative inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 font-bold text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 bg-[length:200%_100%] animate-gradient-shift" />
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 opacity-40 blur-lg" />
                      <span className="relative flex items-center gap-2 text-sm sm:text-base">
                        <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        Say Hello
                      </span>
                    </a>

                    <a
                      href={myResume}
                      className="group relative inline-flex items-center justify-center w-full sm:w-auto px-7 py-3.5 font-bold rounded-2xl border-2 border-cyan-500 dark:border-cyan-400 overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300" />
                      <span className="relative flex items-center gap-2 text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors text-sm sm:text-base">
                        <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        View Resume
                      </span>
                    </a>
                  </div>

                  {/* Social links */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Connect with me</p>
                    <div className="flex justify-center gap-3">
                      {SOCIAL_LINKS.map(({ label, href, icon, hoverBg }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className={`w-11 h-11 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-white ${hoverBg} border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                        >
                          {icon}
                        </a>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Footer tagline */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-50 to-emerald-50 dark:from-gray-800/60 dark:to-gray-900/60 border border-cyan-200 dark:border-gray-700 rounded-full">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">
                    💼 Let's build something amazing together!
                  </span>
                </div>
              </div>

            </div>
          </Slide>
        </div>

        <style>{`
          @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
          @keyframes float {
            0%, 100% { transform: translate(0,0) scale(1); }
            33% { transform: translate(30px,-30px) scale(1.1); }
            66% { transform: translate(-20px,20px) scale(0.9); }
          }
          .animate-gradient-shift { animation: gradient-shift 8s ease infinite; }
          .animate-float { animation: float 20s ease-in-out infinite; }
          .animate-float-delayed { animation: float 20s ease-in-out infinite 10s; }
        `}</style>
      </section>
    );
  }
}

export default ContactSection;