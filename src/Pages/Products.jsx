import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Blob from "../Assets/blob-scene-haikei.svg";
import LazyLoad from "react-lazy-load";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadImage = async () => {
      const response = await axios.get(
        process.env.PUBLIC_URL + "/API/Products.json"
      );

      setProducts(response.data);
    };
    loadImage();
  }, []);

  return (
    <>
      <Navbar />

      <center>
        <div className="text-5xl rounded-lg py-2 text-center my-5 w-60 bg-neutral-800 font-bold text-white">
          Aksesoris
        </div>
      </center>
      <div className="mx-5 flex flex-wrap justify-center">
        {products.map(({ id, name, slug, image }) => {
          if (name === "Aksesoris") {
            return (
              <div
                key={id}
                className="hover:shadow-none duration-300 bg-neutral-800 cursor-default py-7 h-fit w-96 rounded-3xl my-5 mx-5 shadow-lg shadow-pink-500 group"
              >
                <center>
                  <LazyLoad
                    effect="blur"
                    className="h-48 overflow-hidden w-85 duration-300 rounded-3xl"
                  >
                    <img
                      src={process.env.PUBLIC_URL + `${image}`}
                      className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 group-hover:scale-150 duration-300"
                      alt={id}
                      placeholder={Blob}
                    />
                  </LazyLoad>

                  <div className="w-85 h-px my-5 bg-slate-300"></div>
                  <div className="flex justify-between px-7">
                    <div className="text-lg sm:text-4xl text-white w-10 font-semibold">
                      {name}
                    </div>
                    <Link
                      to="http://wa.me/6281329390862"
                      className="py-2 w-30 sm:w-40 text-xs px-5 sm:px-0 sm:text-base shadow-md shadow-pink-500 hover:shadow-none hover:bg-neutral-300 font-semibold rounded-3xl bg-white cursor-pointer duration-200"
                    >
                      🛒 Beli Sekarang
                    </Link>
                  </div>
                </center>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>

      <center>
        <div className="text-5xl rounded-lg py-2 text-center my-5 w-60 bg-neutral-800 font-bold text-white">
          Bouquet
        </div>
      </center>
      <div className="mx-5 flex flex-wrap justify-center">
        {products.map(({ id, name, slug, image }) => {
          if (name === "Bouquet") {
            return (
              <div
                key={id}
                className="hover:shadow-none duration-300 bg-neutral-800 cursor-default py-7 h-fit w-96 rounded-3xl my-5 mx-5 shadow-lg shadow-pink-500 group"
              >
                <center>
                  <LazyLoad
                    effect="blur"
                    className="h-48 overflow-hidden w-85 duration-300 rounded-3xl"
                  >
                    <img
                      src={process.env.PUBLIC_URL + `${image}`}
                      className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 group-hover:scale-150 duration-300"
                      alt={id}
                      placeholder={Blob}
                    />
                  </LazyLoad>

                  <div className="w-85 h-px my-5 bg-slate-300"></div>
                  <div className="flex justify-between px-7">
                    <div className="text-lg sm:text-4xl text-white w-10 font-semibold">
                      {name}
                    </div>
                    <Link
                      to="http://wa.me/6281329390862"
                      className="py-2 w-30 sm:w-40 text-xs px-5 sm:px-0 sm:text-base shadow-md shadow-pink-500 hover:shadow-none hover:bg-neutral-300 font-semibold rounded-3xl bg-white cursor-pointer duration-200"
                    >
                      🛒 Beli Sekarang
                    </Link>
                  </div>
                </center>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>

      <center>
        <div className="text-5xl rounded-lg py-2 text-center my-5 w-60 bg-neutral-800 font-bold text-white">
          Dompet
        </div>
      </center>
      <div className="mx-5 flex flex-wrap justify-center">
        {products.map(({ id, name, slug, image }) => {
          if (name === "Dompet") {
            return (
              <div
                key={id}
                className="hover:shadow-none duration-300 bg-neutral-800 cursor-default py-7 h-fit w-96 rounded-3xl my-5 mx-5 shadow-lg shadow-pink-500 group"
              >
                <center>
                  <LazyLoad
                    effect="blur"
                    className="h-48 overflow-hidden w-85 duration-300 rounded-3xl"
                  >
                    <img
                      src={process.env.PUBLIC_URL + `${image}`}
                      className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 group-hover:scale-150 duration-300"
                      alt={id}
                      placeholder={Blob}
                    />
                  </LazyLoad>

                  <div className="w-85 h-px my-5 bg-slate-300"></div>
                  <div className="flex justify-between px-7">
                    <div className="text-lg sm:text-4xl text-white w-10 font-semibold">
                      {name}
                    </div>
                    <Link
                      to="http://wa.me/6281329390862"
                      className="py-2 w-30 sm:w-40 text-xs px-5 sm:px-0 sm:text-base shadow-md shadow-pink-500 hover:shadow-none hover:bg-neutral-300 font-semibold rounded-3xl bg-white cursor-pointer duration-200"
                    >
                      🛒 Beli Sekarang
                    </Link>
                  </div>
                </center>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>

      <center>
        <div className="text-5xl rounded-lg py-2 text-center my-5 w-60 bg-neutral-800 font-bold text-white">
          Sepatu
        </div>
      </center>
      <div className="mx-5 flex flex-wrap justify-center">
        {products.map(({ id, name, slug, image }) => {
          if (name === "Sepatu") {
            return (
              <div
                key={id}
                className="hover:shadow-none duration-300 bg-neutral-800 cursor-default py-7 h-fit w-96 rounded-3xl my-5 mx-5 shadow-lg shadow-pink-500 group"
              >
                <center>
                  <LazyLoad
                    effect="blur"
                    className="h-48 overflow-hidden w-85 duration-300 rounded-3xl"
                  >
                    <img
                      src={process.env.PUBLIC_URL + `${image}`}
                      className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 group-hover:scale-150 duration-300"
                      alt={id}
                      placeholder={Blob}
                    />
                  </LazyLoad>

                  <div className="w-85 h-px my-5 bg-slate-300"></div>
                  <div className="flex justify-between px-7">
                    <div className="text-lg sm:text-4xl text-white w-10 font-semibold">
                      {name}
                    </div>
                    <Link
                      to="http://wa.me/6281329390862"
                      className="py-2 w-30 sm:w-40 text-xs px-5 sm:px-0 sm:text-base shadow-md shadow-pink-500 hover:shadow-none hover:bg-neutral-300 font-semibold rounded-3xl bg-white cursor-pointer duration-200"
                    >
                      🛒 Beli Sekarang
                    </Link>
                  </div>
                </center>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>

      <center>
        <div className="text-5xl rounded-lg py-2 text-center my-5 w-60 bg-neutral-800 font-bold text-white">
          Tas
        </div>
      </center>
      <div className="mx-5 flex flex-wrap justify-center">
        {products.map(({ id, name, slug, image }) => {
          if (name === "Tas") {
            return (
              <div
                key={id}
                className="hover:shadow-none duration-300 bg-neutral-800 cursor-default py-7 h-fit w-96 rounded-3xl my-5 mx-5 shadow-lg shadow-pink-500 group"
              >
                <center>
                  <LazyLoad
                    effect="blur"
                    className="h-48 overflow-hidden w-85 duration-300 rounded-3xl"
                  >
                    <img
                      src={process.env.PUBLIC_URL + `${image}`}
                      className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 group-hover:scale-150 duration-300"
                      alt={id}
                      placeholder={Blob}
                    />
                  </LazyLoad>

                  <div className="w-85 h-px my-5 bg-slate-300"></div>
                  <div className="flex justify-between px-7">
                    <div className="text-lg sm:text-4xl text-white w-10 font-semibold">
                      {name}
                    </div>
                    <Link
                      to="http://wa.me/6281329390862"
                      className="py-2 w-30 sm:w-40 text-xs px-5 sm:px-0 sm:text-base shadow-md shadow-pink-500 hover:shadow-none hover:bg-neutral-300 font-semibold rounded-3xl bg-white cursor-pointer duration-200"
                    >
                      🛒 Beli Sekarang
                    </Link>
                  </div>
                </center>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>

      <center>
        <div className="text-5xl rounded-lg py-2 text-center my-5 w-60 bg-neutral-800 font-bold text-white">
          Topi
        </div>
      </center>
      <div className="mx-5 flex flex-wrap justify-center">
        {products.map(({ id, name, slug, image }) => {
          if (name === "Topi") {
            return (
              <div
                key={id}
                className="hover:shadow-none duration-300 bg-neutral-800 cursor-default py-7 h-fit w-96 rounded-3xl my-5 mx-5 shadow-lg shadow-pink-500 group"
              >
                <center>
                  <LazyLoad
                    effect="blur"
                    className="h-48 overflow-hidden w-85 duration-300 rounded-3xl"
                  >
                    <img
                      src={process.env.PUBLIC_URL + `${image}`}
                      className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 group-hover:scale-150 duration-300"
                      alt={id}
                      placeholder={Blob}
                    />
                  </LazyLoad>

                  <div className="w-85 h-px my-5 bg-slate-300"></div>
                  <div className="flex justify-between px-7">
                    <div className="text-lg sm:text-4xl text-white w-10 font-semibold">
                      {name}
                    </div>
                    <Link
                      to="http://wa.me/6281329390862"
                      className="py-2 w-30 sm:w-40 text-xs px-5 sm:px-0 sm:text-base shadow-md shadow-pink-500 hover:shadow-none hover:bg-neutral-300 font-semibold rounded-3xl bg-white cursor-pointer duration-200"
                    >
                      🛒 Beli Sekarang
                    </Link>
                  </div>
                </center>
              </div>
            );
          } else {
            return "";
          }
        })}
      </div>

      <Footer />
    </>
  );
}
