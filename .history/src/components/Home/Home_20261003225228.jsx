import React from "react";
import Banner from "../Banner/Banner";
import LatestCropPosts from "../LatestCropPosts/LatestCropPosts";

const latestCropsPromise = fetch("http://localhost:3000/latest-crops");
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestCropPosts></LatestCropPosts>
    </div>
  );
};

export default Home;
