import './App.css';
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import HomeSection from "./Components/HomeSection";
import PortfolioSection from "./Components/PortfolioSection";
import FooterSection from "./Components/FooterSection";
import AboutMeSection from './Components/AboutMeSection';
import ContactSection from './Components/ContactSection';
import SpinnerIndicator from './Components/SpinnerIndicator';
import ServicesSection from './Components/ServicesSection';

const delay = 5;

function App() {
  const [show, setShow] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#home');

  // Check dark mode on mount
  useEffect(() => {
    const darkMode = localStorage.getItem('color-theme') === 'dark';
    setIsDarkMode(darkMode);
  }, []);

  // Handle spinner delay
  useEffect(() => {
    let timer1 = setTimeout(() => setShow(true), delay * 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (!show) return;

    const id = (activeHash || '#home').replace('#', '');
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }, [activeHash, show]);

  const isServicesPage = activeHash.startsWith('#services');

  return show ? (
    <div className="bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
      <NavBar />
      {isServicesPage ? (
        <ServicesSection />
      ) : (
        <>
          <HomeSection />
          <AboutMeSection />
          <PortfolioSection />
          <ContactSection />
        </>
      )}
      <FooterSection />
    </div>
  ) : (
    <div className={`bg-gradient-to-br ${isDarkMode
      ? 'from-gray-900 via-gray-900 to-black'
      : 'from-gray-50 via-white to-cyan-50'
      }`}>
      <SpinnerIndicator />
    </div>
  );
}

export default App;
