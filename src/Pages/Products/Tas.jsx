import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Tas1 from "../../Assets/Products/Tas/tas (1).jpg";
import Tas2 from "../../Assets/Products/Tas/tas (2).jpg";
import Tas3 from "../../Assets/Products/Tas/tas (3).jpg";
import Tas4 from "../../Assets/Products/Tas/tas (4).jpg";
import Tas5 from "../../Assets/Products/Tas/tas (5).jpg";
import Tas6 from "../../Assets/Products/Tas/tas (6).jpg";
import Tas7 from "../../Assets/Products/Tas/tas (7).jpg";
import Tas8 from "../../Assets/Products/Tas/tas (8).jpg";
import LazyLoad from "react-lazy-load";

export default function Tas() {
  const [items, setItems] = useState([
    { nama: "Tas", gambar: Tas1 },
    { nama: "Tas", gambar: Tas2 },
    { nama: "Tas", gambar: Tas3 },
    { nama: "Tas", gambar: Tas4 },
    { nama: "Tas", gambar: Tas5 },
    { nama: "Tas", gambar: Tas6 },
    { nama: "Tas", gambar: Tas7 },
    { nama: "Tas", gambar: Tas8 },
  ]);

  return (
    <>
      <Navbar />
      <div className="mx-5 flex flex-wrap justify-center">
        {items.map((item, i) => {
          return (
            <div
              key={i}
              className="hover:shadow-none duration-300 bg-neutral-800 cursor-default py-7 h-fit w-96 rounded-3xl my-5 mx-5 shadow-lg shadow-pink-500 group"
            >
              <center>
                <LazyLoad
                  effect="blur"
                  placeholder={Blob}
                  className="h-48 overflow-hidden w-85 duration-300 rounded-3xl"
                >
                  <img
                    src={item.gambar}
                    className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 group-hover:scale-150 duration-300"
                    alt={i}
                    placeholder={Blob}
                  />
                </LazyLoad>

                <div className="w-85 h-px my-5 bg-slate-300"></div>
                <div className="flex justify-between px-7">
                  <div className="text-lg sm:text-4xl text-white w-10 font-semibold">
                    {item.nama}
                  </div>
                  <div className="py-2 w-30 sm:w-40 text-xs px-5 sm:px-0 sm:text-base shadow-md shadow-pink-500 hover:shadow-none hover:bg-neutral-300 font-semibold rounded-3xl bg-white cursor-pointer duration-200">
                    🛒 Beli Sekarang
                  </div>
                </div>
              </center>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
