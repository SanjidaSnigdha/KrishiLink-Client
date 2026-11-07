import React from "react";
import { Link } from "react-router";

const Crop = ({ crop }) => {
  const { _id,name, type, image, pricePerUnit } = crop;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-4 pt-4 relative">
        <img src={image} alt="" className="w-full h-48 object-cover rounded" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-xl text-primary font-inter">{name}</h2>
        <p className="absolute top-6 left-6 bg-accent text-primary px-3 py-1 rounded-full">
          {type}
        </p>
        <p className="text-secondary font-bold">{pricePerUnit} / kg</p>
        <div className="card-actions">
          <Link to={`/cropDetails/`} className="btn btn-primary w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Crop;
