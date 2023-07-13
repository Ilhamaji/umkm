import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Tas1 from "../Assets/tas-1.jpeg";

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-900 md:mx-5 rounded-3xl my-10 py-2">
        <div className="text-4xl w-fit px-7 py-2 rounded-3xl mx-10 my-5 bg-neutral-800 text-white font-bold">
          Terlaris
        </div>
        <div className="block mx-10 lg:mr-0 lg:flex">
          <div className="bg-neutral-800 h-fit w-100 rounded-3xl my-5 group hover:bg-neutral-900 duration-300">
            <div className="flex px-7 py-7">
              <div className="text-4xl text-white w-100 font-semibold">
                Tas Rajut
              </div>
            </div>
            <center>
              <div className="w-85 h-px bg-slate-300"></div>
              <div className="h-80 overflow-hidden w-85 mt-7 mb-10 rounded-3xl">
                <img
                  src={Tas1}
                  className="flex z-0 h-100 -translate-y-32"
                  alt="Tas1"
                />
              </div>
            </center>
          </div>

          <div className="bg-neutral-800 h-fit w-auto rounded-3xl my-5 mx-10 group hover:bg-neutral-900 duration-300">
            <div className="flex px-7 py-7">
              <div className="text-4xl mx-0 lg:mx-8 text-white w-100 font-semibold">
                Deskripsi
              </div>
            </div>
            <center>
              <div className="w-85 h-px bg-slate-300"></div>
              <div className="h-80 overflow-hidden w-85 mt-7 text-left text-white mb-10">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati, facere debitis harum quis quisquam consectetur
                voluptatum, aspernatur sint laboriosam numquam id neque,
                doloribus beatae dolore maxime cupiditate iure itaque nobis!
              </div>
            </center>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
