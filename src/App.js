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

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(true), delay * 1000);

      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      // and show will not change to true
      return () => {
        clearTimeout(timer1);
      };
    },
    // useEffect will run only one time with empty []
    // if you pass a value to array,
    // like this - [data]
    // than clearTimeout will run every time
    // this value changes (useEffect re-run)
    []
  );

  return show ? (
    <div class="bg-gray-100 dark:bg-gray-800">
      <NavBar/>

      <HomeSection/>

      <AboutMeSection/>

      <PortfolioSection/>

      <ContactSection/>

      <FooterSection/>
    </div>
  ) : (
    <div class="bg-gray-800">
      <SpinnerIndicator/>
    </div>
  );
}

export default App;
