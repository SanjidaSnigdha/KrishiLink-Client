// import React from 'react';
// import bannerImg from '../../assets/banner.jpg'

// const Banner = () => {
//     return (
//         <div>

//            <img className='mt-6 rounded-xl w-full h-200' src={bannerImg} alt="" />
//         </div>
//     );
// };

// export default Banner;

import React from "react";
import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="h-[350px] md:h-[400px] lg:h-[450px] relative">
      <img
        src={bannerImg}
        alt="Agriculture banner"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="font-bold w-[970px] h-[60px] text-[#FFFFFF] w-2/12 mx-auto text-center mt-2 text-xl absolute">
          Grow Together Build a Stronger Agriculture Community
        </h1>
        <div>
          <p className="text- text-center</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
