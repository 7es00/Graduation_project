// import '../index.css';
import React, { useState } from "react";
import { HeroSection, FormSection, ContactSection } from "../components";
import { StacksSection } from "../components";
import Footer from "../components/Footer";
import { KnowledgeSection } from "../components";
import {BuddySection} from "../components"
import '../styles/home/style.css'
import { useDarkMode } from "../components/DarkModeContext";



const Home = () => {
  const [isclicked, setIsclicked] = useState(false)
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`body ${isDarkMode ? 'dark-mode' : ''}`} data-bs-spy="scroll" data-bs-target="#sideBar">

        <HeroSection/>
        <StacksSection/>
        <BuddySection/>
        {!localStorage.getItem('loggedin') && (
          <FormSection/>
        )} 
        <ContactSection/>
        <div className="homeFooter">
          <Footer/>
        </div>
    </div>
  );
};

export default Home;