import React, { use, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const MyBids = () => {
  const { user } = use(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, []);
  return <div></div>;
};

export default MyBids;
