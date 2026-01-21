import React from 'react';

class FooterSection extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="relative bg-gradient-to-br from-white via-gray-50 to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-black border-t-2 border-gray-200 dark:border-gray-800 overflow-hidden">

        <div className="relative w-full max-w-7xl mx-auto px-4 py-4 md:py-8">
          {/* Bottom Section - Copyright */}
          <div className="flex justify-center text-gray-700 dark:text-gray-300">

            <span>© {currentYear}</span>
            <span className='ml-1'>Developed & Designed by </span>
            <a
              href="#home"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 hover:from-cyan-600 hover:to-blue-600 dark:hover:from-cyan-300 dark:hover:to-blue-300 transition-all ml-1"
            >
              Ronnel Barashari
            </a>

          </div>

          {/* Back to Top Button */}
          <div className="flex justify-center mt-8">
            <a
              href="#home"
              className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full transition-all hover:scale-105 hover:shadow-xl shadow-cyan-500/50 font-medium"
            >
              <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </a>
          </div>
        </div>

        <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
          `}</style>
      </footer>
    );
  }
}

export default FooterSection;