import React from 'react';

const LatestCropPosts = () => {
    return (
      <div>
        <div className="flex justify-between mt-8">
          <h1 className='text-3xl text-secondary font-fam'>Latest Crop Posts</h1>
          <button className="btn btn-primary absolute right-5">
            Explore Crops
          </button>
        </div>
      </div>
    );
};

export default LatestCropPosts;