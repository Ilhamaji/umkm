import React, { useState } from "react";
import Logo from "../Assets/logo-removebg.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [collapse, collapsed] = useState(false);
  const colClicked = () => {
    if (!collapse) {
      collapsed(true);
    } else {
      collapsed(false);
    }
  };

  return (
    <>
      <div className="sticky shadow-md top-0 justify-between py-5 w-100 bg-white flex">
        <ul className="ml-5">
          <li className="mr-5">
            <img src={Logo} alt="logo" className="w-20" />
          </li>
        </ul>
        <ul className="m-auto hidden md:inline h-100">
          <li className="inline">
            <NavLink
              className="inline mx-2 rounded hover:text-white hover:bg-pink-500 py-2 px-4 transition"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="inline">
            <NavLink
              className="inline mx-2 rounded hover:text-white hover:bg-pink-500 py-2 px-4 transition"
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li className="inline">
            <NavLink
              className="inline mx-2 rounded hover:text-white hover:bg-pink-500 py-2 px-4 transition"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="inline">
            <NavLink
              className="inline mx-2 rounded hover:text-white hover:bg-pink-500 py-2 px-4 transition"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <ul className="mr-5 hidden md:inline">
          <li className="inline ml-5 text-slate-500">FAQ</li>
          <li className="transition hover:transition inline ml-5 border border-pink-500 rounded py-2 px-5 hover:cursor-pointer hover:bg-pink-500 hover:text-white">
            Get Started
          </li>
        </ul>
        <ul className="md:hidden inline mr-5">
          <button onClick={colClicked}>
            <div
              className={
                collapse
                  ? "w-6 h-1 bg-slate-900 my-1 rotate-45 translate-y-2 duration-300"
                  : "w-6 h-1 bg-slate-900 my-1 duration-300"
              }
            >
              {" "}
            </div>
            <div
              className={
                collapse
                  ? "hidden duration-300"
                  : "w-6 h-1 bg-slate-900 my-1 duration-300"
              }
            ></div>
            <div
              className={
                collapse
                  ? "w-6 h-1 bg-slate-900 my-1 rotate-135 duration-300"
                  : "w-6 h-1 bg-slate-900 my-1 duration-300"
              }
            >
              {" "}
            </div>
          </button>
        </ul>
      </div>

      {!collapse ? (
        ""
      ) : (
        <ul className="sticky md:hidden shadow-md bg-white border-slate-300 rounded border ml-auto w-100 top-16 z-40">
          <NavLink
            to={"/"}
            className="block text-center py-2 hover:bg-pink-400 hover:text-white"
          >
            Home
          </NavLink>
          <NavLink
            to={"/products"}
            className="block text-center py-2 hover:bg-pink-400 hover:text-white"
          >
            Products
          </NavLink>
          <NavLink
            to={"/about"}
            className="block text-center py-2 hover:bg-pink-400 hover:text-white"
          >
            About
          </NavLink>
          <NavLink
            to={"/contact"}
            className="block text-center py-2 hover:bg-pink-400 hover:text-white"
          >
            Contact
          </NavLink>
        </ul>
      )}
    </>
  );
}
