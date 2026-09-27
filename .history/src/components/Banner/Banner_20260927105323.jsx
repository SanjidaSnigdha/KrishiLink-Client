import React from 'react';
import bannerImg from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            
           <img className='mt-6 rounded-xl w-full ' src={bannerImg} alt="" /> 
        </div>
    );
};

export default Banner;