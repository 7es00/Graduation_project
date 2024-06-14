import React, { useRef, useEffect, useState } from "react";
// import styles from "../front.module.css";
import '../styles/home/style.css'




import axios from "axios";

import { TimelineComponent } from "../components/Timeline";

// import {CertificationComponent} from "../components/certificate"

import Templates from '../components/Templates';
import { RecommendedPrograms } from "../components";
import { RecommendedWebsite } from "../components";

import Freepik from "../assests/imgs/freepik.png";

import { useParams } from "react-router-dom";

import { Navbar, Documents } from "../components";

import { Swiper, SwiperSlide } from "swiper/react";

import QuizBtn from "../components/QuizBtn";
import Footer from "../components/Footer";
import Certification from "../components/Certification";
import { useDarkMode } from "../components/DarkModeContext";


// Install Swiper's components

const apiUrl = process.env.REACT_APP_API_URL;

const Front = () => {
  const swiperRef = useRef(null);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/stacks/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data);
      } catch (error) {
        setError(error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);


  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Make sure to destructure all required values


  return (

    <div className={`body ${isDarkMode ? 'dark-mode' : ''}`}>

      {/* navBar section*/}
      <Navbar />
      {/* end navBar section*/}

      {/* Timelines */}
      <div className="bodyContainer container-fluid">
      <div className="trackName centerElement coloredText text-center">
        {data && data.name}
      </div>
      {data && data.tracks && data.tracks.map((track, index) => (
        <TimelineComponent
          key={index}
          trackName={track.name}
          trackDescription={track.description}
          trackLevel={track.level}
          technologies={track.technologies}
        />
      ))}
    </div>

      {/* documentation section */}
      {data && data.documentations && data.documentations.length > 0 && (
        <Documents documentsData={data.documentations} />
      )}
      {/* end documentation section */}

      {/* certifications */}
      <Certification data={data}/>
      {/* end certifications */}


      {/* Templates section */}
      {(data && data.templates && data.templates.length > 0) && (
        <Templates templatesData={data.templates} />
      )}
      {/* end Templates section */}
      
      {/* program section */}
      {(data && data.programs && data.programs.length > 0) && (
        <RecommendedPrograms programs={data.programs} />
      )}
      {/* end program section */}

      {/* websites Section  */}
      {(data && data.websites && data.websites.length > 0) && (
        <RecommendedWebsite websites={data.websites} />
      )}
      {/* end websites Section  */}

      {/* quize Section  */}
      <QuizBtn data={data.name} />
      {/* end quize Section  */}

      {/* footer Section  */}
      <Footer/>
      {/* end footer Section  */}

    </div>
    
  );
  
};

export default Front;
