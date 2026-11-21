import React from "react";

const CreateACrop = () => {
  return (
    <div>
      <form onSubmit={handleBidSubmit}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="title"
            className="input"
            
          />
          {/* email */}
          <label className="label">Image URL</label>
          <input
            type="text"
            className="input"
            name="image"
            
          />
          {/* bid amount */}
          <label className="label">Bid</label>
          <input
            type="text"
            name="price_min"
            className="input"
            placeholder="Your Bid"
          />
          {/* bid amount */}
          <label className="label">Bid</label>
          <input
            type="text"
            name="price_min"
            className="input"
            placeholder="Your Bid"
          />

          <button className="btn btn-neutral mt-4">Place Your Bid</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateACrop;
