import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaChevronUp } from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  {
    icon: FaGithub,
    href: 'https://github.com/ronnelb-dev',
    label: 'GitHub',
    color: 'hover:text-white hover:bg-gray-700',
  },
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/ronnel-barashari/',
    label: 'LinkedIn',
    color: 'hover:text-white hover:bg-blue-600',
  },
  {
    icon: FaFacebook,
    href: 'https://www.facebook.com/RonnelBarashari/',
    label: 'Facebook',
    color: 'hover:text-white hover:bg-blue-500',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:your@email.com',
    label: 'Email',
    color: 'hover:text-white hover:bg-cyan-500',
  },
];

class FooterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showScrollTop: false };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({ showScrollTop: window.scrollY > 300 });
  }

  render() {
    const currentYear = new Date().getFullYear();
    const { showScrollTop } = this.state;

    return (
      <>
        <footer className="relative bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-black overflow-hidden">

          {/* Decorative top border — animated gradient line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

          {/* Subtle background blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-5xl mx-auto px-5 pt-10 pb-6">

            {/* === TOP SECTION: Name + tagline === */}
            <div className="flex flex-col items-center text-center mb-8">
              <a
                href="#home"
                className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 tracking-tight mb-1 hover:opacity-80 transition-opacity"
              >
                Ronnel Barashari
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
                Full-Stack Developer · Crafting digital experiences with care
              </p>
            </div>

            {/* === MIDDLE SECTION: Nav + Socials === */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">

              {/* Nav links — wraps neatly on mobile */}
              <nav aria-label="Footer navigation">
                <ul className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors font-medium relative group"
                      >
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Social icons */}
              <div className="flex items-center gap-2.5">
                {SOCIAL_LINKS.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-9 h-9 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:scale-110 hover:shadow-lg hover:border-transparent ${color}`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent mb-5" />

            {/* === BOTTOM: Copyright === */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400 dark:text-gray-500">
              <span>© {currentYear} Ronnel Barashari. All rights reserved.</span>
              <span className="flex items-center gap-1">
                Developed & Designed with
                <span className="text-red-400 mx-0.5">♥</span>
                by
                <a
                  href="#home"
                  className="ml-1 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-75 transition-opacity"
                >
                  Ronnel Barashari
                </a>
              </span>
            </div>

          </div>
        </footer>

        {/* === Floating scroll-to-top button (appears after scrolling) === */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className={`fixed bottom-6 right-5 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/40 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <FaChevronUp size={15} />
        </button>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
      </>
    );
  }
}

export default FooterSection;