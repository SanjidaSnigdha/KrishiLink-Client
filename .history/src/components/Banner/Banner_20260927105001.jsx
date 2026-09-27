import React from "react";
import bannerImg from '../../assets/banner.jpg'
const Banner = () => {
  return (
    <div className="hero mt-6 h-70px w-full">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img src={bannerImg} className="w-200 h-100 rounded-lg shadow-2xl" />
      
        </div>
      </div>
    </div>
  );
};

export default Banner;
