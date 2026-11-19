import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const MyBids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBids
        });
    }
  }, [user?.email]);
  return <div></div>;
};

export default MyBids;
