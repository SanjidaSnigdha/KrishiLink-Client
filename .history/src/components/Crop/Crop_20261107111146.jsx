import React from "react";
import { Link } from "react-router";

const Crop = ({ crop }) => {
  const { _id,name, type, image, pricePerUnit } = crop;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-4 pt-4">
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <Link to={"/cropDetails/} className="btn btn-primary w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Crop;
