import React from "react";
import { useLoaderData } from "react-router";

const CropDetails = () => {
  const crop = useLoaderData();
  console.log(crop);
  return <div>
    {/* p */}
  </div>;
};

export default CropDetails;
