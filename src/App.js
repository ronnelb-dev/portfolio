import './App.css';
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import HomeSection from "./Components/HomeSection";
import PortfolioSection from "./Components/PortfolioSection";
import FooterSection from "./Components/FooterSection";
import AboutMeSection from './Components/AboutMeSection';
import ContactSection from './Components/ContactSection';
import SpinnerIndicator from './Components/SpinnerIndicator';

const delay = 5;

function App() {
  const [show, setShow] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return show ? (
    <div className="bg-gradient-to-br from-gray-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-black">
      <NavBar />
      <HomeSection />
      <AboutMeSection />
      <PortfolioSection />
      <ContactSection />
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