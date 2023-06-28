import React from "react";
import Logo from "../Assets/logo-removebg.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex justify-between py-5 w-100 bg-white mx-5 border-b-2 border-l-2 border-r-2 border-slate-200 border-solid">
      <ul className="ml-5">
        <li className="mr-5">
          <img src={Logo} alt="logo" className="w-20" />
        </li>
      </ul>
      <ul className="m-auto h-100">
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
      <ul className="mr-5">
        <li className="inline ml-5 text-slate-500">FAQ</li>
        <li className="transition hover:transition inline ml-5 border border-pink-500 rounded py-2 px-5 hover:cursor-pointer hover:bg-pink-500 hover:text-white">
          Get Started
        </li>
      </ul>
    </div>
  );
}
