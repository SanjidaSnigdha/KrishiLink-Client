import React from "react";

const CreateACrop = () => {
  const handleCreateACrop = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const price_min = e.target.price_min.value;
    const price_max = e.target.price_max.value;
    console.log(title,image;)

  };
  return (
    <div className="lg:w-1/2 mx-auto">
      <h1 className="font-bold text-4xl text-center text-primary font-inter mt-8">
        Create A Crop
      </h1>
      <div className="w-1/2 mx-auto">
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

            <button className="btn btn-secondary w-85 mx-auto mt-4 mb-3">
              Add a product
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CreateACrop;
