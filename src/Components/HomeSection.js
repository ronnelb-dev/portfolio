import React from 'react';
import myLogo from '../Images/logo192.png';

const HERO_PROOF_CHIPS = [
  'Web Apps',
  'Mobile Apps',
  'Backend Systems',
];

class HomeSection extends React.Component {
  render() {
    return (
      <section
        id="home"
        className="relative min-h-[calc(100svh-4rem)] sm:min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden scroll-mt-16 bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
      >
        {/* Subtle hero background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent dark:via-cyan-500/30" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent dark:via-emerald-500/20" />
        </div>

        {/* Main content */}
        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-8 py-10 sm:py-20">
          <div className="flex flex-col items-center text-center gap-4 sm:gap-6">

            {/* Profile image */}
            <div className="animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl transition-opacity duration-300" />
                <div className="relative w-24 h-24 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 shadow-xl">
                  <img
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900"
                    src={myLogo}
                    alt="Ronnel Barashari"
                  />
                </div>
              </div>
            </div>

            {/* Text block */}
            <div className="animate-fade-in-up space-y-3 sm:space-y-4 w-full">

              <p className="text-xs sm:text-base font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-cyan-600 dark:text-cyan-400 animate-fade-in-up animation-delay-300 px-1">
                Ronnel Barashari · Full-Stack Developer
              </p>

              {/* Main heading — scales down gracefully on small screens */}
              <h1 className="max-w-4xl mx-auto text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight px-1">
                Practical web and mobile apps,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500">
                  built end to end.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="max-w-2xl mx-auto text-[0.95rem] sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-up animation-delay-300 px-1">
                Clean interfaces, reliable backends, and tools people can actually use.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 px-1 animate-fade-in-up animation-delay-300">
                {HERO_PROOF_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border-2 border-cyan-200 dark:border-cyan-500/30 bg-white/80 dark:bg-gray-800/70 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-300 shadow-md shadow-cyan-500/10"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* CTA buttons — full-width on mobile, auto on sm+ */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 sm:pt-6 animate-fade-in-up animation-delay-500 w-full px-0 sm:px-0">
                <a
                  href="#portfolio"
                  className="group relative flex min-h-12 w-full sm:w-auto items-center justify-center px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-full shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/25 active:scale-[0.98] transition-all duration-300 overflow-hidden text-center focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
                >
                  <span className="relative z-10">See my work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="#contact"
                  className="flex min-h-12 w-full sm:w-auto items-center justify-center px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full shadow-md border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-lg active:scale-[0.98] transition-all duration-300 text-center focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
                >
                  Start a conversation
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll indicator — hidden on very small screens */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
          <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-80 transition-opacity">
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium tracking-widest uppercase">Scroll</span>
            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animation-delay-300 { animation-delay: 0.3s; }
          .animation-delay-500 { animation-delay: 0.5s; }
          .animate-fade-in { animation: fade-in 1s ease-out; }
          .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
          @media (prefers-reduced-motion: reduce) {
            .animate-fade-in,
            .animate-fade-in-up {
              animation: none !important;
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
      </section>
    );
  }
}

export default HomeSection;
