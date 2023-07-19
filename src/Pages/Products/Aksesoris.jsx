import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import LazyLoad from "react-lazy-load";
import axios from "axios";

export default function Aksesoris() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      const response = await axios.get(
        process.env.PUBLIC_URL + "/API/Products.json"
      );

      setProducts(response.data);
      setLoading(false);
    };
    loadImage();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin text-4xl bold text-white">↻</div>
        </div>
      ) : (
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
                      />
                    </LazyLoad>

                    <div className="w-85 h-px my-5 bg-slate-300"></div>
                    <div className="flex justify-between px-7">
                      <div className="text-lg sm:text-4xl text-white w-10 font-semibold">
                        {name}
                      </div>
                      <div className="py-2 w-30 sm:w-40 text-xs px-5 sm:px-0 sm:text-base shadow-md shadow-pink-500 hover:shadow-none hover:bg-neutral-300 font-semibold rounded-3xl bg-white cursor-pointer duration-200">
                        🛒 Beli Sekarang
                      </div>
                    </div>
                  </center>
                </div>
              );
            }
          })}
        </div>
      )}

      <Footer />
    </>
  );
}
