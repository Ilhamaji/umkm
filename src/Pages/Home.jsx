import React from "react";
import Navbar from "../Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="back z-0">
        <div className="pt-20 md:pt-36 pb-36 md:pb-48">
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
          <div className="text-center mx-5 my-7">
            <div className="text-3xl md:text-5xl px-5 rounded bg-lime-300 font-black jumbotron inline text-white">
              Craft & Accesories
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-950 rounded-3xl -mt-5 w-100 pb-5 mx-5">
        <div className="flex justify-between">
          <div className="pt-10 pb-5 mx-10 text-white font-semibold text-lg">
            Produk Kita
          </div>
          <div className="pt-10 pb-5 mx-10 w-60 text-right text-neutral-400">
            Berbagai macam kerajinan tangan yang dapat direquest
          </div>
        </div>
        <div className="w-100 mx-10 border-b-1"></div>

        <div className="flex flex-wrap justify-center w-100 mr-10">
          <div className="bg-neutral-800 h-60 w-60 ml-10 rounded-3xl my-10 ">
            <span></span>
          </div>
          <div className="bg-neutral-800 h-60 w-60 ml-10 rounded-3xl my-10 ">
            <span></span>
          </div>
          <div className="bg-neutral-800 h-60 w-60 ml-10 rounded-3xl my-10 ">
            <span></span>
          </div>
          <div className="bg-neutral-800 h-60 w-60 ml-10 rounded-3xl my-10 ">
            <span></span>
          </div>
          <div className="bg-neutral-800 h-60 w-60 ml-10 rounded-3xl my-10 ">
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}
