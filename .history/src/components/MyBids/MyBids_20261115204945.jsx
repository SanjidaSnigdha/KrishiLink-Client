import React, { use, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const MyBids = () => {
  const { user } = use(AuthContext);
  const [bids,set]

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  }, [user?.email]);
  return <div></div>;
};

export default MyBids;
