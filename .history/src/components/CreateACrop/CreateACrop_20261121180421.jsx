import React from "react";

const CreateACrop = () => {
  const handleCreateACrop = (e) => {
    e.preventDefault();
  };
  return (
    <div className="lg:w-1/2 mx-auto">
      <h1 className="font-bold text-4xl text-center text-primary font-inter">
        Create A Crop
      </h1>
      <form onSubmit={handleCreateACrop}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="title" className="input" />
          {/* email */}
          <label className="label">Image URL</label>
          <input type="text" className="input" name="image" />
          {/* bid amount */}
          <label className="label">Min Price</label>
          <input
            type="text"
            name="price_min"
            className="input"
            placeholder="Min Price"
          />
          {/* bid amount */}
          <label className="label">Max Price</label>
          <input
            type="text"
            name="price_max"
            className="input"
            placeholder="Max Price"
          />

          <button className="btn btn-secondary w-56 mx-auto mt-4">Add a product</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateACrop;
