import React from "react";

const CreateACrop = () => {
  return (
    <div>
      <form onSubmit={handleBidSubmit}>
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

          <button className="btn btn-neutral mt-4">Place Your Bid</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateACrop;
