import React from "react";
import Logo from "../Assets/logo-removebg.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between py-5 w-100 bg-white mx-5 border-b-2 border-l-2 border-r-2 border-slate-200 border-solid">
      <ul className="ml-5">
        <li className="mr-5">
          <img src={Logo} className="w-20" />
        </li>
      </ul>
      <ul className="m-auto h-100">
        <li
          className="inline mx-2 rounded hover:text-white hover:bg-pink-500 py-2 px-4 transition hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className="inline mx-2 rounded hover:text-white hover:bg-pink-500 py-2 px-4 transition hover:cursor-pointer"
          onClick={() => navigate("/products")}
        >
          Products
        </li>
        <li
          className="inline mx-2 rounded hover:text-white hover:bg-pink-500 py-2 px-4 transition hover:cursor-pointer"
          onClick={() => navigate("/about")}
        >
          About
        </li>
        <li
          className="inline mx-2 rounded hover:text-white hover:bg-pink-500 py-2 px-4 transition hover:cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Contact
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
