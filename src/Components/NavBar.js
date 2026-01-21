import React from 'react';
import {
  FaRegMoon,
  FaRegSun
} from 'react-icons/fa';
import logoSrc from '../Images/logo192.png';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDarkMode = this.handleDarkMode.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { 
      darkMode: true, 
      isNavExpanded: false,
      scrolled: false 
    };
  }

  componentDidMount() {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      this.setState({ darkMode: true });
    } else {
      document.documentElement.classList.remove('dark');
      this.setState({ darkMode: false });
    }
    
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== this.state.scrolled) {
      this.setState({ scrolled: isScrolled });
    }
  }

  handleDarkMode() {
    if (this.state.darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
      this.setState({ darkMode: false });
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
      this.setState({ darkMode: true });
    }
  }

  render() {
    const { darkMode, isNavExpanded, scrolled } = this.state;

    const navLinks = [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About Me' },
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#contact', label: 'Contact' }
    ];

    return (
      <nav className={`sticky top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white dark:bg-gray-900 shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  title="my-logo" 
                  src={logoSrc} 
                  className="h-10 w-10 relative transform group-hover:scale-110 transition-transform duration-300 rounded-full" 
                  alt="Ronnel Logo" 
                />
              </div>
              <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Ronnel
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium transition-colors duration-200 group"
                >
                  <span className="relative z-10 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {link.label}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-3">
              
              {/* Dark Mode Toggle */}
              <button
                onClick={this.handleDarkMode}
                className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 group"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <FaRegMoon className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                ) : (
                  <FaRegSun className="h-5 w-5 text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => this.setState({ isNavExpanded: !isNavExpanded })} 
                type="button" 
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle navigation menu"
              >
                <svg 
                  className={`w-6 h-6 text-gray-700 dark:text-gray-300 transition-transform duration-300 ${isNavExpanded ? 'rotate-90' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isNavExpanded ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isNavExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => this.setState({ isNavExpanded: false })}
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 dark:hover:from-gray-700 dark:hover:to-gray-700 hover:text-cyan-600 dark:hover:text-cyan-400 rounded-lg font-medium transition-all duration-200 transform hover:translate-x-2"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;