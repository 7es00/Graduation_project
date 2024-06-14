import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import "../styles/stack/certifications.css"

const Certification = ({ data }) => {
  useEffect(() => {
    var CertificationSwiper = new Swiper(".CertificationSwiper", {
      slidesPerView: 1,
      spaceBetween: 0,
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
          slidesPerView: 2,
        },
      },
    });

    // Cleanup function to destroy the swiper instance on unmount
    return () => {
      if (CertificationSwiper) CertificationSwiper.destroy();
    };
  }, []);

  return (
    <div className={`certifcationSection container-fluid mx-auto py-5`}>
      <div className="row">
        <div className="col-xl-3">
          <div className={`certificationDescription flexCenter flex-column`}>
            <div className={`CertificationPayment coloredText sectionHead my-4 pt-4`}>
              certifications
            </div>
            <div className={`certificationDetails text-center`}>
              we recommend to you this certifications to get a high level and
              help to get Interesting informations
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-md-11 col-sm-12 mx-auto">
          <div className={`certificationBox overflow-hidden mt-xl-5`}>
            <div className="swiper-container CertificationSwiper">
              <div className="swiper-wrapper">
                {data &&
                  data.certifications &&
                  data.certifications.map((certification, index) => (
                    <div className="swiper-slide flexCenter" key={index}>
                      <a href={certification.link} className="">
                        <img
                          src={certification.image}
                          alt=""
                          className="img-fluid border border-dark rounded-3"
                        />
                      </a>
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

export default Certification;
