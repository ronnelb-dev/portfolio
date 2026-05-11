import React from 'react';
import { FaCheckCircle, FaRocket, FaStethoscope, FaStore } from 'react-icons/fa';
import myLogo from '../Images/logo192.png';

const trustPoints = [
  'Built custom systems for healthcare and business operations',
  'Focused on performance, usability, and scalable architecture',
  'End-to-end development from idea to deployment',
];

class HomeSection extends React.Component {
  render() {
    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(14,165,233,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:44px_44px] dark:bg-[linear-gradient(to_right,rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,211,238,0.08)_1px,transparent_1px)]" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white dark:from-gray-900 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cyan-50 dark:from-gray-800 to-transparent" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-24">
          <div className="grid lg:grid-cols-[1.18fr_0.82fr] items-center gap-10 lg:gap-14">
            <div className="animate-fade-in-up text-center lg:text-left space-y-6">
              <p className="inline-flex items-center justify-center lg:justify-start gap-2 text-sm sm:text-base font-semibold text-cyan-700 dark:text-cyan-300">
                <FaRocket className="h-4 w-4" aria-hidden="true" />
                Web, mobile, API, dashboard, booking, and queue systems
              </p>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                  Custom Web & Mobile App Developer
                </h1>

                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  I design and build scalable web applications, mobile apps, APIs, dashboards,
                  booking platforms, and queue management systems tailored for healthcare
                  providers, SMEs, and service-based businesses.
                </p>

                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  From internal business tools to customer-facing platforms, I help businesses
                  streamline operations, improve efficiency, and deliver better digital experiences.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2 w-full">
                <a
                  href="#contact"
                  className="group relative w-full sm:w-auto min-h-12 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 overflow-hidden text-center"
                >
                  <span className="relative z-10">Book a Free Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>

                <a
                  href="#portfolio"
                  className="w-full sm:w-auto min-h-12 px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full shadow-lg border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
                >
                  View Projects
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 pt-3 max-w-4xl mx-auto lg:mx-0">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2.5 text-left text-sm text-gray-600 dark:text-gray-300 leading-snug"
                  >
                    <FaCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500 dark:text-emerald-400" aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in flex flex-col items-center lg:items-end gap-6">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full border border-cyan-200 dark:border-cyan-500/30" />
                <div className="relative w-36 h-36 sm:w-48 sm:h-48 rounded-full p-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 shadow-2xl">
                  <img
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900"
                    src={myLogo}
                    alt="Ronnel Barashari"
                  />
                </div>
              </div>

              <div className="w-full max-w-sm space-y-4 text-left">
                <div className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 dark:bg-cyan-500/15 text-cyan-600 dark:text-cyan-300">
                    <FaStethoscope className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Healthcare systems</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Queue, booking, and operations tools</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-300">
                    <FaStore className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">SME platforms</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Dashboards, APIs, and customer apps</p>
                  </div>
                </div>
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
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 1s ease-out; }
          .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        `}</style>
      </section>
    );
  }
}

export default HomeSection;
