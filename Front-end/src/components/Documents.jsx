import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import "../styles/stack/documentation.css"

const Documents = ({ documentsData }) => {
  useEffect(() => {
    var documentationSwiper = new Swiper(".documentationSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
      },
    });

    // Cleanup function to destroy the swiper instance on unmount
    return () => {
      if (documentationSwiper) documentationSwiper.destroy();
    };
  }, []);

  return (
    <div className={`container-fluid documentationSection`}>
      <div className={`row flexCenter`}>
        <div className="col-12 text-center">
          <h1 className={`coloredText my-5 sectionHead`}>Documentation</h1>
          <p className={`my-5 recommendtionText`}>
            we highly recommend for you this documentation that will help you to
            improve your level and help you to increase your productivity
          </p>
        </div>
        <div className="col-10 col-lg-9 mb-5">
          <div className="swiper-container mySwiper documentationSwiper overflow-hidden">
            <div className="swiper-wrapper">
              {documentsData &&
                documentsData.map((document, index) => (
                  <div className="swiper-slide col-4" key={index}>
                    <div className={`documentationBox rounded-4 flexCenter flex-column overflow-hidden`}>
                      <div className="img">
                        <img
                          className="w-100 h-100 object-fit-cover"
                          src={document.image}
                          alt={document.name}
                        />
                      </div>
                      <div className={`documentationName my-3 text-center`}>
                        {document.name}
                      </div>
                      <div className={`documentationDetails px-1`}>
                        {document.short_description}
                      </div>
                      <button
                        onClick={() => window.open(document.link, "_self")}
                        className="documentationButton"
                      >
                        visit me
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
