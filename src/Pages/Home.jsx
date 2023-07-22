import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      const response = await axios.get(
        process.env.PUBLIC_URL + "/API/Home.json"
      );

      setProducts(response.data);
      setLoading(false);
    };
    loadImage();
  }, []);

  return (
    <>
      <Navbar />
      <div className="back z-0">
        <div className="pt-20 md:pt-36 pb-32 md:pb-48">
          <div className="text-center">
            <div className="text-slate-500">
              Beli Kerajinan Tangan Keinginanmu.
            </div>
          </div>
          <div className="text-center mx-5">
            <div className="text-5xl font-black jumbotron inline">
              Selamat Datang di{" "}
              <div className="inline lobster text-pink-500">Kirei</div>
            </div>
          </div>
          <div className="text-center mx-5 my-2 md:my-7">
            <div className="text-3xl md:text-5xl px-5 rounded bg-lime-300 font-black jumbotron inline text-white">
              Craft & Accesories
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-950 rounded-3xl -mt-5 w-100 pb-5 md:mx-5">
        <div className="flex justify-between">
          <div className="pt-10 pb-5 mx-5 md:mx-10 text-white font-bold text-xl">
            Produk Kita
          </div>
          <div className="pt-10 pb-5 mx-5 md:mx-10 w-60 text-right text-neutral-400">
            Berbagai macam kerajinan tangan yang dapat direquest
          </div>
        </div>
        <div className="w-100 mx-5 md:mx-10 border-b-1"></div>

        <div className="flex flex-wrap justify-center w-100 my-5 mx-5 overflow-hidden">
          {products.map(({ id, jenis, image, slug }) => {
            if (loading) {
              return (
                <div className="flex justify-center">
                  <div className="animate-spin bg-black w-12 h-12 text-center align-middle rounded-full text-4xl bold text-white">
                    ↻
                  </div>
                </div>
              );
            } else {
              return (
                <Link key={id} to={slug}>
                  <div className="bg-neutral-800 border-4 border-transparent active:border-white hover:border-white cursor-pointer md:h-96 md:w-96 rounded-3xl my-5 mx-5 group hover:bg-neutral-900 duration-300">
                    <div className="flex px-7 py-7">
                      <div className="text-4xl text-white w-10 font-semibold">
                        {jenis}
                      </div>
                      <div className="text-4xl text-white cursor-pointer font-semibold bg-neutral-500 group-hover:bg-white rounded-full ml-auto mr-0 h-16 w-16">
                        <div className="-rotate-45 align-middle text-center mt-3 ml-1 md:mt-2.5 md:-ml-1 group-hover:rotate-0 duration-300 group-hover:text-pink-500">
                          ➜
                        </div>
                      </div>
                    </div>
                    <center>
                      <div className="w-85 h-px bg-slate-300"></div>
                      <div className="h-48 overflow-hidden w-85 mt-7 hover:scale-x-110 hover:scale-y-110 duration-300 rounded-3xl">
                        <img
                          src={process.env.PUBLIC_URL + `${image}`}
                          className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 grayscale group-hover:grayscale-0 duration-300 hover:scale-x-110 hover:scale-y-110"
                          alt="Home"
                        />
                      </div>
                    </center>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
