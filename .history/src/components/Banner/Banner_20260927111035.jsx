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
    <div className="h-[300px] md:h-[400px] lg:h-[450px] relative">
      <img src={bannerImg} alt="Agriculture banner" className="w-full h-full object-cover rounded-xl" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center'>
        <h1 className="font-bold w-[970px] h-[60px] text-[#FFFFFF] w-2/12 mx-auto text-center mt-2 text-xl absolute">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text- text-center">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="btn border-amber-400 p-1 flex mt-8 rounded-xl font-bold bg-[#E7FE29] w-2/12 mx-auto text-center items-center">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
