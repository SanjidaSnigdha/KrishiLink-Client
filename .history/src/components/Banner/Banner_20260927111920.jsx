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
          Grow Together <br></br>Build a Stronger<br></br> Agriculture Community
        </h1>
        
          <p className="text- text-center text-[">
            Connect with farmers, traders and consumers in one digital
            space{" "}
          </p>
        
      </div>
    </div>
  );
};

export default Banner;
