import React from 'react';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';
import logoSrc from '../Images/logo192.png';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Me' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDarkMode = this.handleDarkMode.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      darkMode: true,
      isNavExpanded: false,
      scrolled: false,
    };
  }

  componentDidMount() {
    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
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

    return (
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/20'
            : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
        } border-b border-gray-100 dark:border-gray-800`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src={logoSrc}
                  className="h-9 w-9 relative rounded-full object-cover group-hover:scale-105 transition-transform duration-300 ring-2 ring-cyan-400/30 group-hover:ring-cyan-400/60"
                  alt="Ronnel Logo"
                />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                Ronnel
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 group rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-500/10"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Dark mode toggle */}
              <button
                onClick={this.handleDarkMode}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all duration-200 group"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <FaRegSun className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors" />
                ) : (
                  <FaRegMoon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors" />
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => this.setState({ isNavExpanded: !isNavExpanded })}
                className="md:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all duration-200"
                aria-label="Toggle navigation menu"
                aria-expanded={isNavExpanded}
              >
                <div className="w-5 h-5 flex flex-col justify-center gap-1.5 relative">
                  <span className={`block h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 origin-center ${isNavExpanded ? 'rotate-45 translate-y-[7px]' : ''}`} />
                  <span className={`block h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 ${isNavExpanded ? 'opacity-0 scale-x-0' : ''}`} />
                  <span className={`block h-0.5 bg-gray-600 dark:bg-gray-300 rounded-full transition-all duration-300 origin-center ${isNavExpanded ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu — slides down */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isNavExpanded ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-3 space-y-1 border-t border-gray-100 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => this.setState({ isNavExpanded: false })}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 rounded-xl font-medium text-sm transition-all duration-200 group"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
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
