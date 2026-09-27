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

const Banner = () => {
  return (
    <div className="max-w-[1200px] mx-auto h-[475px] bg-[#131313]/90 mt-8 mb-10 rounded-3xl relative">
      <img src={bannerImg} alt="" className="w-2/12 mx-auto p-10" />
      <div>
        <h1 className="font-bold w-[970px] h-[60px] text-[#FFFFFF] w-2/12 mx-auto text-center mt-2 text-xl">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-[#FFFFFF]/70 text-center">
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