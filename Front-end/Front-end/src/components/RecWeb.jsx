import React, { useEffect } from "react";
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import '../styles/stack/websites.css';

// Initialize Swiper core modules
SwiperCore.use([Pagination]);

const RecommendedWebsite = ({ websites }) => {
  useEffect(() => {
    const swiper = new SwiperCore(".websiteSlider", {
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
        992: {
          slidesPerView: 3,
        },
      },
    });

    // Cleanup on unmount
    return () => {
      swiper.destroy();
    };
  }, []); // Empty array ensures useEffect runs only once

  return (
    <div className="container-lg">
      {/* header */}
      <div className="row">
        <div className="col-12">
          <div className="fs-1 text-center my-5 sectionHead coloredText py-5">Recommended websites</div>
        </div>
      </div>

      {/* Swiper container */}
      <div className={`websiteSwiper row overflow-hidden`}>
        <div className="swiper-container websiteSlider">
          <div className="swiper-wrapper">
            {websites.map((website, index) => (
              <div key={index} className="swiper-slide col-4">
                <div className={`websiteBox overflow-hidden`}>
                  <div className={`imgBox`}>
                  <img src={website.image} alt="websitBoxImg" />  
                  </div>
                  <div className="container">
                    <div className={`name my-2 text-center`}>
                      {website.name}
                    </div>
                    <div className={`hint px-3`}>
                      {website.details}
                    </div>
                    <div className="text-center">
                      <a href={website.link}>
                        <button className={`websitesButtons text-center`}>
                          Visit
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedWebsite;
