import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import AllCrops from "../components/AllCrops/Allcrops";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet>
        <Ba
        <AllCrops></AllCrops>
      </Outlet>
    </div>
  );
};

export default RootLayout;
