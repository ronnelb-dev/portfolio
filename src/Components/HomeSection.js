import React from 'react';
import Typewriter from 'typewriter-effect';
import myLogo from '../Images/logo192.png';

class HomeSection extends React.Component {
  render() {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-300 dark:bg-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 -right-20 w-72 h-72 bg-emerald-300 dark:bg-emerald-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 dark:opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-8">
            
            {/* Profile Image */}
            <div className="flex justify-center mb-8 animate-fade-in">
              <div className="relative group">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 animate-spin-slow opacity-50"></div>
                
                {/* Image container */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <img 
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900" 
                    src={myLogo} 
                    alt="Ronnel Barashari"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-4 animate-fade-in-up">
              
              

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white leading-tight">
                Hello, I'm{' '}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 animate-gradient-x">
                    Ronnel Barashari
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-full transform scale-x-0 animate-scale-x"></span>
                </span>
              </h1>

              {/* Typewriter section */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                <span className="text-gray-900 dark:text-white">I'm a</span>
                <Typewriter
                  options={{
                    wrapperClassName: "text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 inline-block",
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                    strings: [
                      "Full-Stack Developer",
                      "Problem Solver",
                      "Creative Thinker",
                      "Tech Enthusiast"
                    ]
                  }}
                />
              </div>

              {/* Subtitle */}
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in-up animation-delay-300">
                Crafting solutions to complex problems with modern web technologies
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-8 animate-fade-in-up animation-delay-500">
                <a 
                  href="#portfolio" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full shadow-lg hover:shadow-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400 transform hover:scale-105 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
              
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-gray-400 dark:text-gray-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
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
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          .animation-delay-300 {
            animation-delay: 0.3s;
          }
          .animation-delay-500 {
            animation-delay: 0.5s;
          }
          .animation-delay-700 {
            animation-delay: 0.7s;
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 3s ease infinite;
          }
          .animate-scale-x {
            animation: scale-x 1.5s ease-out forwards;
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out;
          }
          .animate-pulse-slow {
            animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.75; }
            50% { opacity: 1; }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </section>
    );
  }
}

export default HomeSection;