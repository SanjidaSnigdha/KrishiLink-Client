import React from "react";

const Crop = ({ crop }) => {
  const { name, type, image, pricePerUnit } = crop;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-4 pt-4">
        <img src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"></h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Crop;
