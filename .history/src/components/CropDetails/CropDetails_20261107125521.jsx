import React, { useRef } from "react";
import { useLoaderData } from "react-router";

const CropDetails = () => {
  const crop = useLoaderData();
  const bidModalRef = useRef(null);
  console.log(crop);
  return (
    <div>
      {/* crop info */}
      <div>
        <div></div>
        <div>
          <button className="btn btn-primary">I want to buy this crop</button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            open modal
          </button>
        </div>

        <dialog id=className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              Press ESC key or click the button below to close
            </p>
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
