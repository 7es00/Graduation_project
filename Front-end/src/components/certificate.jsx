import React from "react";


export const CertificationComponent = ({ url, imgSrc }) => (
    <div className="swiper-slide">
        <a href={url}><img src={imgSrc} alt="" /></a>
    </div>
);