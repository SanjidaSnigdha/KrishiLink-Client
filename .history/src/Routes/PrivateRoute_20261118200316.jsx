import React, { Children, use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation } from "react-router";

const PrivateRoute = () => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();

  if(loading){
    return <span className="loading loading-spinner text-success"></span>
  }

  if(user){
    return Children
  }
  return <div></div>;
};

export default PrivateRoute;
