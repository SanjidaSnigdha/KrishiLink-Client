import React, { use } from "react";
import Crop from "../Crop/Crop";

const LatestCropPosts = ({ latestCropsPromise }) => {
  const crops = use(latestCropsPromise);
  console.log(crops);
  return (
    <div>
      <div className="mt-15">
        <h1 className="font-bold text-4xl text-center text- font-inter">
          Latest <span className="text-[#16A34A]">Crops</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-6 mt-6">
        {crops.map((crop) => (
          <Crop key={crop._id} crop={crop}></Crop>
        ))}
      </div>
    </div>
  );
};

export default LatestCropPosts;
