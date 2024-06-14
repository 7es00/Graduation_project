import React, { useEffect } from "react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "../styles/stack/programs.css";

SwiperCore.use([Pagination]);

const RecommendedPrograms = ({ programs }) => {
  useEffect(() => {
    const programSwiper = new SwiperCore(".programSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      programSwiper.destroy();
    };
  }, []);

  return (
    <div className="recommendedProgram container overflow-hidden py-5">
      <div className="container">
        <h1 className="fs-1 text-center py-5 coloredText sectionHead">
          Recommended Programs
        </h1>
        <div className="row">
          <div className="programBox col-10">
            <div className="swiper-container programSwiper">
              <div className="swiper-wrapper">
                {programs.map((program, index) => (
                  <div key={index} className="swiper-slide col-4">
                    <div className="columns">
                      <ul className="program">
                        <li className="header py-4">{program.name}</li>
                        <li className="grey">{program.status}</li>
                        {program.features.split("|").map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                        <li className="grey">
                          <a href={program.link}>
                            <div className="button" data-tooltip="Size : 20Mb">
                              <div className="button-wrapper">
                                <div className="text">Download</div>
                                <span className="icon">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    width="2em"
                                    height="2em"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="none"
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedPrograms;
