import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import AllCrops from "../components/AllCrops/Allcrops";
import Home from "../components/Home/Home";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet>
        <Home></Home>
        <AllCrops></AllCrops>
      </Outlet>
    </div>
  );
};

export default RootLayout;
