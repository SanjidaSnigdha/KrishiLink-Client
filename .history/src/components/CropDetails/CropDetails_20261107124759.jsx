import React from "react";
import { useLoaderData } from "react-router";

const CropDetails = () => {
  const crop = useLoaderData();
  console.log(crop);
  return <div>
    {/* crop info */}
  </div>;
};

export default CropDetails;
