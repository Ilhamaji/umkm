import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Aksesoris1 from "../Assets/Products/Accessoris/aksesoris (1).jpg";
import Aksesoris2 from "../Assets/Products/Accessoris/aksesoris (2).jpg";
import Aksesoris3 from "../Assets/Products/Accessoris/aksesoris (3).jpg";
import Aksesoris4 from "../Assets/Products/Accessoris/aksesoris (4).jpg";
import Aksesoris5 from "../Assets/Products/Accessoris/aksesoris (5).jpg";
import Aksesoris6 from "../Assets/Products/Accessoris/aksesoris (6).jpg";
import Bouquet1 from "../Assets/Products/Bouquet/bouquet (1).jpg";
import Bouquet2 from "../Assets/Products/Bouquet/bouquet (2).jpg";
import Bouquet3 from "../Assets/Products/Bouquet/bouquet (3).jpg";
import Bouquet4 from "../Assets/Products/Bouquet/bouquet (4).jpg";
import Dompet1 from "../Assets/Products/Dompet/dompet (1).jpg";
import Dompet2 from "../Assets/Products/Dompet/dompet (2).jpg";
import Dompet3 from "../Assets/Products/Dompet/dompet (3).jpg";
import Dompet4 from "../Assets/Products/Dompet/dompet (4).jpg";
import Dompet5 from "../Assets/Products/Dompet/dompet (5).jpg";
import Dompet6 from "../Assets/Products/Dompet/dompet (6).jpg";
import Dompet7 from "../Assets/Products/Dompet/dompet (7).jpg";
import Sepatu1 from "../Assets/Products/Sepatu/sepatu (1).jpg";
import Sepatu2 from "../Assets/Products/Sepatu/sepatu (2).jpg";
import Sepatu3 from "../Assets/Products/Sepatu/sepatu (3).jpg";
import Sepatu4 from "../Assets/Products/Sepatu/sepatu (4).jpg";
import Sepatu5 from "../Assets/Products/Sepatu/sepatu (5).jpg";
import Tas1 from "../Assets/Products/Tas/tas (1).jpg";
import Tas2 from "../Assets/Products/Tas/tas (2).jpg";
import Tas3 from "../Assets/Products/Tas/tas (3).jpg";
import Tas4 from "../Assets/Products/Tas/tas (4).jpg";
import Tas5 from "../Assets/Products/Tas/tas (5).jpg";
import Tas6 from "../Assets/Products/Tas/tas (6).jpg";
import Tas7 from "../Assets/Products/Tas/tas (7).jpg";
import Tas8 from "../Assets/Products/Tas/tas (8).jpg";
import Topi1 from "../Assets/Products/Topi/topi (1).jpg";
import Topi2 from "../Assets/Products/Topi/topi (2).jpg";
import Topi3 from "../Assets/Products/Topi/topi (3).jpg";
import Topi4 from "../Assets/Products/Topi/topi (4).jpg";
import Topi5 from "../Assets/Products/Topi/topi (5).jpg";
import Topi6 from "../Assets/Products/Topi/topi (6).jpg";
import Blob from "../Assets/blob-scene-haikei.svg";
import LazyLoad from "react-lazy-load";

export default function Products() {
  const [items, setItems] = useState([
    { nama: "Aksesoris", gambar: Aksesoris1 },
    { nama: "Aksesoris", gambar: Aksesoris2 },
    { nama: "Aksesoris", gambar: Aksesoris3 },
    { nama: "Aksesoris", gambar: Aksesoris4 },
    { nama: "Aksesoris", gambar: Aksesoris5 },
    { nama: "Aksesoris", gambar: Aksesoris6 },
    { nama: "Bouquet", gambar: Bouquet1 },
    { nama: "Bouquet", gambar: Bouquet2 },
    { nama: "Bouquet", gambar: Bouquet3 },
    { nama: "Bouquet", gambar: Bouquet4 },
    { nama: "Dompet", gambar: Dompet1 },
    { nama: "Dompet", gambar: Dompet2 },
    { nama: "Dompet", gambar: Dompet3 },
    { nama: "Dompet", gambar: Dompet4 },
    { nama: "Dompet", gambar: Dompet5 },
    { nama: "Dompet", gambar: Dompet6 },
    { nama: "Dompet", gambar: Dompet7 },
    { nama: "Sepatu", gambar: Sepatu1 },
    { nama: "Sepatu", gambar: Sepatu2 },
    { nama: "Sepatu", gambar: Sepatu3 },
    { nama: "Sepatu", gambar: Sepatu4 },
    { nama: "Sepatu", gambar: Sepatu5 },
    { nama: "Tas", gambar: Tas1 },
    { nama: "Tas", gambar: Tas2 },
    { nama: "Tas", gambar: Tas3 },
    { nama: "Tas", gambar: Tas4 },
    { nama: "Tas", gambar: Tas5 },
    { nama: "Tas", gambar: Tas6 },
    { nama: "Tas", gambar: Tas7 },
    { nama: "Tas", gambar: Tas8 },
    { nama: "Topi", gambar: Topi1 },
    { nama: "Topi", gambar: Topi2 },
    { nama: "Topi", gambar: Topi3 },
    { nama: "Topi", gambar: Topi4 },
    { nama: "Topi", gambar: Topi5 },
    { nama: "Topi", gambar: Topi6 },
  ]);

  return (
    <>
      <Navbar />

      <h1>Aksesoris</h1>
      <div className="mx-5 flex flex-wrap justify-center">
        {items.map((item, i) => {
          if (item.nama === "Aksesoris") {
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
          } else {
            return "";
          }
        })}
      </div>

      <h1>Bouquet</h1>
      <div className="mx-5 flex flex-wrap justify-center">
        {items.map((item, i) => {
          if (item.nama === "Bouquet") {
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
          } else {
            return "";
          }
        })}
      </div>

      <h1>Dompet</h1>
      <div className="mx-5 flex flex-wrap justify-center">
        {items.map((item, i) => {
          if (item.nama === "Dompet") {
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
          } else {
            return "";
          }
        })}
      </div>

      <h1>Sepatu</h1>
      <div className="mx-5 flex flex-wrap justify-center">
        {items.map((item, i) => {
          if (item.nama === "Sepatu") {
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
          } else {
            return "";
          }
        })}
      </div>

      <h1>Tas</h1>
      <div className="mx-5 flex flex-wrap justify-center">
        {items.map((item, i) => {
          if (item.nama === "Tas") {
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
          } else {
            return "";
          }
        })}
      </div>

      <h1>Topi</h1>
      <div className="mx-5 flex flex-wrap justify-center">
        {items.map((item, i) => {
          if (item.nama === "Topi") {
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
          } else {
            return "";
          }
        })}
      </div>

      <Footer />
    </>
  );
}
