import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../asset/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>HOME</li>
            <li>SHOP</li>
            <li>ABOUT</li>
            <li>VETERINARIAN</li>
            <li>SERVICES</li>
            <li>GALLERY</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="w-32">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <Link to="/" className=" text-black hover:text-emerald-500 mx-6 relative after:absolute after:bg-emerald-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">HOME</Link>
          <Link to="/" className=" text-black hover:text-emerald-500 mx-6 relative after:absolute after:bg-emerald-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">SHOP</Link>
          <Link to="/" className=" text-black hover:text-emerald-500 mx-6 relative after:absolute after:bg-emerald-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">ABOUT</Link>
          <Link to="/" className=" text-black hover:text-emerald-500 mx-6 relative after:absolute after:bg-emerald-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">VETERINARIAN</Link>
          <Link to="/" className=" text-black hover:text-emerald-500 mx-6 relative after:absolute after:bg-emerald-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">SERVICES</Link>
          <Link to="/" className=" text-black hover:text-emerald-500 mx-6 relative after:absolute after:bg-emerald-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">GALLERY</Link>
          <Link to="/" className=" text-black hover:text-emerald-500 mx-6 relative after:absolute after:bg-emerald-500 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">CONTACT</Link>
        </ul>
      </div>
      <div className="navbar-end flex justify-evenly">
      <Link to="/login" className="btn btn-outline text-black">Login</Link>
          <img alt="Profile" className="rounded-full w-10" src="https://placeimg.com/80/80/people" />
      </div>
    </div>
  );
};

export default Navbar;
