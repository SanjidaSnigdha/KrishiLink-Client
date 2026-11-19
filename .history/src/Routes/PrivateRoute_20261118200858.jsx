import React, { Children, use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ childre }) => {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  if (user) {
    return Children;
  }
  return <Navigate state={location?.pathname} to="/register"></Navigate>;
};

export default PrivateRoute;
