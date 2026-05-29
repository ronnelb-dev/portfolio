import React from 'react';
import Typewriter from 'typewriter-effect';
import myLogo from '../Images/logo192.png';

class HomeSection extends React.Component {
  render() {
    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
      >
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-56 h-56 sm:w-72 sm:h-72 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 blur-3xl animate-blob" />
          <div className="absolute top-1/3 -right-20 w-56 h-56 sm:w-72 sm:h-72 bg-emerald-300 dark:bg-emerald-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-20 left-1/3 w-56 h-56 sm:w-72 sm:h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Main content */}
        <div className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
          <div className="flex flex-col items-center text-center gap-6 sm:gap-8">

            {/* Profile image */}
            <div className="animate-fade-in">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-60 blur-xl group-hover:opacity-90 transition-opacity duration-300 animate-pulse-slow" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 animate-spin-slow opacity-40" />
                <div className="relative w-32 h-32 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <img
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900"
                    src={myLogo}
                    alt="Ronnel Barashari"
                  />
                </div>
              </div>
            </div>

            {/* Text block */}
            <div className="animate-fade-in-up space-y-4 sm:space-y-5 w-full">

              {/* Main heading — scales down gracefully on small screens */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight px-2">
                Hello, I'm{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 animate-gradient-x">
                    Ronnel Barashari
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-full animate-scale-x" />
                </span>
              </h1>

              {/* Typewriter row — wraps cleanly on mobile */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold min-h-[2.5rem] sm:min-h-[3.5rem]">
                <span className="text-gray-900 dark:text-white">I'm a</span>
                <Typewriter
                  options={{
                    wrapperClassName:
                      'text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 inline-block',
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    strings: [
                      'Full-Stack Developer',
                      'Problem Solver',
                      'Creative Thinker',
                      'Tech Enthusiast',
                    ],
                  }}
                />
              </div>

              {/* Subtitle */}
              <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-up animation-delay-300 px-2">
                Crafting solutions to complex problems with modern web technologies
              </p>

              {/* CTA buttons — full-width on mobile, auto on sm+ */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 sm:pt-6 animate-fade-in-up animation-delay-500 w-full px-4 sm:px-0">
                <a
                  href="#portfolio"
                  className="group relative w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 overflow-hidden text-center"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                >
                  Get In Touch
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll indicator — hidden on very small screens */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-80 transition-opacity">
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium tracking-widest uppercase">Scroll</span>
            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes scale-x {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
          .animation-delay-300 { animation-delay: 0.3s; }
          .animation-delay-500 { animation-delay: 0.5s; }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
          .animate-scale-x { animation: scale-x 1.5s ease-out forwards; }
          .animate-fade-in { animation: fade-in 1s ease-out; }
          .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
          .animate-pulse-slow { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
          .animate-spin-slow { animation: spin 8s linear infinite; }
        `}</style>
      </section>
    );
  }
}

export default HomeSection;