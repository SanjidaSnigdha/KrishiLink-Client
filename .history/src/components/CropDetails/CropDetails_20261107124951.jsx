import React from "react";
import { useLoaderData } from "react-router";

const CropDetails = () => {
  const crop = useLoaderData();
  console.log(crop);
  return <div>
    {/* crop info */}
    <div>
       <div>
        </div> 
        <div>
            
        </div>
    </div>
    {/* bids for this crop */}
  </div>;
};

export default CropDetails;
