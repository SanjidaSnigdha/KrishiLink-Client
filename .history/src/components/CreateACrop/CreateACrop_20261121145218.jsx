import React from "react";

const CreateACrop = () => {
  return (
    <div>
      <form onSubmit={handleBidSubmit}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            readOnly
            defaultValue={user?.displayName}
          />
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            readOnly
            defaultValue={user?.email}
          />
          {/* bid amount */}
          <label className="label">Bid</label>
          <input
            type="text"
            name="bid"
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
