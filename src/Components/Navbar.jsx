import React, { useState } from "react";
import Logo from "../Assets/logo-removebg.png";
import { NavLink } from "react-router-dom";
import IconWa from "../Assets/icon (1).png";
import IconIg from "../Assets/icon (2).png";
import IconFb from "../Assets/icon (3).png";

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
      <div className="sticky shadow-md justify-between top-0 z-40 h-16 py-5 w-100 bg-white flex">
        <ul className="ml-5">
          <li className="mr-5">
            <img src={Logo} alt="logo" className="w-24" />
          </li>
        </ul>
        <ul className="hidden md:inline h-100">
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
          <li className="inline z-50 cursor-pointer group">
            <div className="inline mx-2 rounded hover:text-white border border-pink-500 hover:bg-pink-500 py-2 px-4 transition">
              Contact{" "}
              <div className="font-bold inline-flex bg-pink-500 px-1 text-white rounded-md group-hover:-rotate-90 duration-300">
                {"﹤"}
              </div>
            </div>
            <div className="group-hover:grid group-hover:visible hidden invisible mt-2 mantul duration-300">
              <ul className="justify-self-end bg-neutral-100 rounded-md">
                <li
                  className="block hover:bg-white hover:border-l-4 border-pink-500 group/list
                "
                >
                  <a
                    href="http://instagram.com/kirei_galery"
                    className="flex py-2 mx-5 justify-between group-hover/list:ml-4"
                  >
                    <img src={IconIg} alt="ig" /> Instagram
                  </a>
                </li>
                <li
                  className="block hover:bg-white hover:border-l-4 border-pink-500 group/list
                "
                >
                  <a
                    href="https://www.facebook.com/profile.php?id=100009602703519"
                    className="flex py-2 mx-5 justify-between group-hover/list:ml-4"
                  >
                    <img src={IconFb} alt="fb" /> Facebook
                  </a>
                </li>
                <li
                  className="block hover:bg-white hover:border-l-4 border-pink-500 group/list
                "
                >
                  <a
                    href="http://wa.me/6281329390862"
                    className="flex py-2 mx-5 justify-between group-hover/list:ml-4"
                  >
                    <img src={IconWa} alt="wa" /> Whatsapp
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <ul className="md:hidden md:invisible inline mr-5">
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
        <ul className="sticky md:hidden shadow-md bg-white rounded ml-auto w-100 top-16 z-40">
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
          <div className="block text-center py-2 hover:bg-pink-400 hover:text-white group/collapse">
            Contact
            <ul className="justify-self-end mx-5 bg-neutral-100 rounded-md hidden  inviible text-black group-hover/collapse:visible group-hover/collapse:block">
              <li
                className="block hover:bg-white rounded-md border-4 border-white group/list
                "
              >
                <a
                  href="http://instagram.com/kirei_galery"
                  className="flex py-2 mx-5 justify-between group-hover/list:ml-4"
                >
                  <img src={IconIg} alt="ig" /> Instagram
                </a>
              </li>
              <li
                className="block hover:bg-white rounded-md border-4 border-white group/list
                "
              >
                <a
                  href="https://www.facebook.com/profile.php?id=100009602703519"
                  className="flex py-2 mx-5 justify-between group-hover/list:ml-4"
                >
                  <img src={IconFb} alt="fb" /> Facebook
                </a>
              </li>
              <li
                className="block hover:bg-white rounded-md border-4 border-white group/list
                "
              >
                <a
                  href="http://wa.me/6281329390862"
                  className="flex py-2 mx-5 justify-between group-hover/list:ml-4"
                >
                  <img src={IconWa} alt="wa" /> Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </ul>
      )}
    </>
  );
}
