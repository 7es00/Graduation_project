import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import Footer from "../components/Footer";

import axios from "axios";
import { useParams } from "react-router-dom";

import '../styles/technologies/style.css';
import { useDarkMode } from "../components/DarkModeContext";

const apiUrl = process.env.REACT_APP_API_URL;

function Technology() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const askApi = async () => {
      const response = await axios.get(`${apiUrl}/technologies/${id}`);
      setData(response.data);
    };

    askApi();
  }, []);

  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Make sure to destructure all required values


  return (
    <div className={`body ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="technologiesPage">    
        {/* navbar section */}
        <Navbar />
        {/* end navbar section */}

        {/* discription section */}
        <div class="descriptionContainer container lh-lg text-center rounded-4 shadow-sm p-5"> 
          <h1 class="text-capitalize">What does {data && data.name} mean?</h1>
          <p className="pt-5">{data && data.description}</p>
        </div>
        {/* end discription section */}

        {/* videoBox */}
        <div className="videoSection">
          {data &&
            data.videos &&
            data.videos.map((video, index) => (
              <div key={index} className="videoContainer container rounded-5 p-5 my-5 shadow">
                <div className="row g-lg-5 g-2">
                  <div className="col-12 col-lg-6 videoBox">
                    <div className="imgBox h-100">
                      <img
                        className="w-100 h-100 rounded-4 object-fit- img-fluid"
                        src={video.image}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 p-4 rounded-4 mt-lg-5 mt-4 text-capitalize videoDetailsBox">
                    <div className="videoDetails">
                      <div className="name mt-0">
                        <span>instructor name : </span> {video.instructor}
                      </div>
                      <div className="language mt-4">
                        <span>language : </span> {video.language}
                      </div>
                      <div className="duration mt-4">
                        <span>duration : </span> {video.duration}
                      </div>
                      {video.is_recommended === 1 && (
                        <div className="recommendation mt-4">
                          we recommend hight this channel to you
                        </div>
                      )}
                      <a
                        href={video.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none m-5"
                      >
                        <button className="videoBtn">
                          <div className="videoLink">visit now</div>
                          <div className="icon">
                            <svg
                              height="24"
                              width="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 0h24v24H0z" fill="none"></path>
                              <path
                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* end videoBox */}

        {/* footer Section  */}
        <Footer/>
        {/* end footer Section  */}
      </div>
    </div>
  );
}

export default Technology;
