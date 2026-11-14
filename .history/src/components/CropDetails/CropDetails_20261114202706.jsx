import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const CropDetails = () => {
  const { _id: cropId } = useLoaderData();
  const [bids, setBids] = useState([]);
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/crops/bids/${cropId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("bids for this crop", data);
        setBids(data);
      });
  }, [cropId]);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };
  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;
    console.log(name, email, bid);
    const newBid = {
      crops: cropsId,
      buyer_name: name,
      buyer_email: email,
      bid_price: bid,
      status: "pending",
    };
    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your bid has been placed.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
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
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">Give theuhihgggg!</h3>
            <p className="py-4">Offer jsssssh</p>
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
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      {/* bids for this crop */}
      <div>
        <h1 className="font-bold text-4xl text-center text-primary font-inter">
          Bids for this crops: <span className="text-[#16A34A]">{bids.}</span>
        </h1>
      </div>
    </div>
  );
};

export default CropDetails;
