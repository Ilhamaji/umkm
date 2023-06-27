import React from "react";
import Logo from "../Assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between py-5 w-100 bg-sky-300 px-20">
      <ul className="m-auto">
        <li className="mr-5">
          <img src={Logo} alt="horse" className="w-10" />
        </li>
      </ul>
      <ul className="m-auto h-100">
        <li
          className="inline mx-5 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className="inline mx-5 hover:cursor-pointer"
          onClick={() => navigate("/products")}
        >
          Products
        </li>
        <li
          className="inline mx-5 hover:cursor-pointer"
          onClick={() => navigate("/about")}
        >
          About
        </li>
        <li
          className="inline mx-5 hover:cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Contact
        </li>
      </ul>
      <ul className="m-auto">
        <li className="inline ml-5">Search</li>
      </ul>
    </div>
  );
}
