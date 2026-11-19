import React, { use, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const MyBids = () => {
  const {user} = use(AuthContext)
  useEffect(()=>{
    if(user?.email){
      fetch
    }

  },[])
  return <div></div>;
};

export default MyBids;
