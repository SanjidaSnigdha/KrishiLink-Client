import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation } from "react-router";

const PrivateRoute = () => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();

  if(loading){
    return<
  }
  return <div></div>;
};

export default PrivateRoute;
