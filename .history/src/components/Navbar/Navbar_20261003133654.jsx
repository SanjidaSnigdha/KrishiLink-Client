import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { FaLeaf } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user,signOut } = use(AuthContext);
  const links = (
    <>
      <li className="text-[#065F46]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allCrops">All Crops</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/myCrops">My Crops</NavLink>
          </li>
          <li>
            <NavLink to="/myBids">My Bids</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaLeaf className="text-[#16A34A] text-3xl"></FaLeaf>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl text-[#065F46]/100 font-inter">
          Krishi<span className="text-[#16A34A]">Link</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a className="btn">SignOut</a>
        ) : (
          <Link to="/register">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
