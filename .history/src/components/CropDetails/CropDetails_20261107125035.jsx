import React from "react";
import { useLoaderData } from "react-router";

const CropDetails = () => {
  const crop = useLoaderData();
  console.log(crop);
  return (
    <div>
      {/* crop info */}
      <div>
        <div></div>
        <div>
          <button className="btn btn-primary">I want to buy this crop</button>
        </div>
      </div>
      {/* bids for this crop */}
    </div>
  );
};

export default CropDetails;
