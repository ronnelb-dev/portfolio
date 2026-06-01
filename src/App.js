import './App.css';
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import HomeSection from "./Components/HomeSection";
import PortfolioSection from "./Components/PortfolioSection";
import FooterSection from "./Components/FooterSection";
import AboutMeSection from './Components/AboutMeSection';
import ContactSection from './Components/ContactSection';
import ServicesSection from './Components/ServicesSection';
import ChatWithRonnel from './Components/ChatWithRonnel';

function App() {
  const [activeHash, setActiveHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const id = (activeHash || '#home').replace('#', '');
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }, 0);
  }, [activeHash]);

  const isServicesPage = activeHash.startsWith('#services');

  return (
    <div className="min-w-0 overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
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
      <ChatWithRonnel />
    </div>
  );
}

export default App;
