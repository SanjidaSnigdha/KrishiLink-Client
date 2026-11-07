import React, { useRef } from "react";
import { useLoaderData } from "react-router";

const CropDetails = () => {
  const crop = useLoaderData();
  const bidModalRef = useRef(null);
  console.log(crop);
  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };
  const handleBidSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {/* crop info */}
      <div>
        <div></div>
        <div>
          <button onClick={handleBidModalOpen} className="btn btn-primary">
            I want to buy this crop
          </button>
        </div>

        <dialog
          ref={bidModalRef}       
         className="fieldset">
          
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
       
        

          className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Give theuhihgggg!</h3>
            <p className="py-4">Offer jsssssh</p>
            <form onSubmit={handleBidSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      {/* bids for this crop */}
    </div>
  );
};

export default CropDetails;
