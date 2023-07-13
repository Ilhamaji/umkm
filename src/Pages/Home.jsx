import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Tas1 from "../Assets/tas-1.jpeg";
import Dompet1 from "../Assets/dompet-1.jpeg";
import Sepatu1 from "../Assets/sepatu-1.jpeg";
import Bouquet1 from "../Assets/bouquet-1.jpeg";
import Topi1 from "../Assets/topi-1.jpeg";
import Aksesoris1 from "../Assets/aksesoris-1.jpeg";

export default function Home() {
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

      <div className="bg-neutral-100 rounded-3xl -mt-5 w-100 pb-5 md:mx-5">
        <div className="flex justify-between">
          <div className="pt-10 pb-5 mx-10 text-black font-semibold text-lg">
            Produk Kita
          </div>
          <div className="pt-10 pb-5 mx-10 w-60 text-right text-neutral-400">
            Berbagai macam kerajinan tangan yang dapat direquest
          </div>
        </div>
        <div className="w-100 mx-10 border-b-1"></div>

        <div className="flex flex-wrap justify-center w-100 mr-10 my-5 overflow-hidden">
          <div className="bg-neutral-800 h-96 w-96 rounded-3xl my-5 ml-10 group hover:bg-neutral-900 duration-300">
            <div className="flex px-7 py-7">
              <div className="text-4xl text-white w-10 font-semibold">Tas</div>
              <div className="text-4xl text-white font-semibold bg-neutral-500 group-hover:bg-white rounded-full ml-auto mr-0 h-16 w-16">
                <div className="-rotate-45 align-middle text-center mt-3 ml-1 md:mt-2.5 md:-ml-1 hover:rotate-0 duration-300 group-hover:text-pink-500">
                  ➜
                </div>
              </div>
            </div>
            <center>
              <div className="w-85 h-px bg-slate-300"></div>
              <div className="h-48 overflow-hidden w-85 mt-7 hover:scale-x-110 hover:scale-y-110 duration-300 rounded-3xl">
                <img
                  src={Tas1}
                  className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 grayscale group-hover:grayscale-0 duration-300 hover:scale-x-110 hover:scale-y-110"
                  alt="Tas1"
                />
              </div>
            </center>
          </div>

          <div className="bg-neutral-800 h-96 w-96 rounded-3xl my-5 ml-10 group hover:bg-neutral-900 duration-300">
            <div className="flex px-7 py-7">
              <div className="text-4xl text-white w-10 font-semibold">
                Dompet
              </div>
              <div className="text-4xl text-white font-semibold bg-neutral-500 group-hover:bg-white rounded-full ml-auto mr-0 h-16 w-16">
                <div className="-rotate-45 align-middle text-center mt-3 ml-1 md:mt-2.5 md:-ml-1 hover:rotate-0 duration-300 group-hover:text-pink-500">
                  ➜
                </div>
              </div>
            </div>
            <center>
              <div className="w-85 h-px bg-slate-300"></div>
              <div className="h-48 overflow-hidden w-85 mt-7 hover:scale-x-110 hover:scale-y-110 duration-300 rounded-3xl">
                <img
                  src={Dompet1}
                  className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 grayscale group-hover:grayscale-0 duration-300 hover:scale-x-110 hover:scale-y-110"
                  alt="Tas1"
                />
              </div>
            </center>
          </div>

          <div className="bg-neutral-800 h-96 w-96 rounded-3xl my-5 ml-10 group hover:bg-neutral-900 duration-300">
            <div className="flex px-7 py-7">
              <div className="text-4xl text-white w-10 font-semibold">
                Sepatu
              </div>
              <div className="text-4xl text-white font-semibold bg-neutral-500 group-hover:bg-white rounded-full ml-auto mr-0 h-16 w-16">
                <div className="-rotate-45 align-middle text-center mt-3 ml-1 md:mt-2.5 md:-ml-1 hover:rotate-0 duration-300 group-hover:text-pink-500">
                  ➜
                </div>
              </div>
            </div>
            <center>
              <div className="w-85 h-px bg-slate-300"></div>
              <div className="h-48 overflow-hidden w-85 mt-7 hover:scale-x-110 hover:scale-y-110 duration-300 rounded-3xl">
                <img
                  src={Sepatu1}
                  className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 grayscale group-hover:grayscale-0 duration-300 hover:scale-x-110 hover:scale-y-110"
                  alt="Tas1"
                />
              </div>
            </center>
          </div>

          <div className="bg-neutral-800 h-96 w-96 rounded-3xl my-5 ml-10 group hover:bg-neutral-900 duration-300">
            <div className="flex px-7 py-7">
              <div className="text-4xl text-white w-10 font-semibold">
                Bouquet
              </div>
              <div className="text-4xl text-white font-semibold bg-neutral-500 group-hover:bg-white rounded-full ml-auto mr-0 h-16 w-16">
                <div className="-rotate-45 align-middle text-center mt-3 ml-1 md:mt-2.5 md:-ml-1 hover:rotate-0 duration-300 group-hover:text-pink-500">
                  ➜
                </div>
              </div>
            </div>
            <center>
              <div className="w-85 h-px bg-slate-300"></div>
              <div className="h-48 overflow-hidden w-85 mt-7 hover:scale-x-110 hover:scale-y-110 duration-300 rounded-3xl">
                <img
                  src={Bouquet1}
                  className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 grayscale group-hover:grayscale-0 duration-300 hover:scale-x-110 hover:scale-y-110"
                  alt="Tas1"
                />
              </div>
            </center>
          </div>

          <div className="bg-neutral-800 h-96 w-96 rounded-3xl my-5 ml-10 group hover:bg-neutral-900 duration-300">
            <div className="flex px-7 py-7">
              <div className="text-4xl text-white w-10 font-semibold">Topi</div>
              <div className="text-4xl text-white font-semibold bg-neutral-500 group-hover:bg-white rounded-full ml-auto mr-0 h-16 w-16">
                <div className="-rotate-45 align-middle text-center mt-3 ml-1 md:mt-2.5 md:-ml-1 hover:rotate-0 duration-300 group-hover:text-pink-500">
                  ➜
                </div>
              </div>
            </div>
            <center>
              <div className="w-85 h-px bg-slate-300"></div>
              <div className="h-48 overflow-hidden w-85 mt-7 hover:scale-x-110 hover:scale-y-110 duration-300 rounded-3xl">
                <img
                  src={Topi1}
                  className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 grayscale group-hover:grayscale-0 duration-300 hover:scale-x-110 hover:scale-y-110"
                  alt="Tas1"
                />
              </div>
            </center>
          </div>

          <div className="bg-neutral-800 h-96 w-96 rounded-3xl my-5 ml-10 group hover:bg-neutral-900 duration-300">
            <div className="flex px-7 py-7">
              <div className="text-4xl text-white w-10 font-semibold">
                Aksesoris
              </div>
              <div className="text-4xl text-white font-semibold bg-neutral-500 group-hover:bg-white rounded-full ml-auto mr-0 h-16 w-16">
                <div className="-rotate-45 align-middle text-center mt-3 ml-1 md:mt-2.5 md:-ml-1 hover:rotate-0 duration-300 group-hover:text-pink-500">
                  ➜
                </div>
              </div>
            </div>
            <center>
              <div className="w-85 h-px bg-slate-300"></div>
              <div className="h-48 overflow-hidden w-85 mt-7 hover:scale-x-110 hover:scale-y-110 duration-300 rounded-3xl">
                <img
                  src={Aksesoris1}
                  className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 grayscale group-hover:grayscale-0 duration-300 hover:scale-x-110 hover:scale-y-110"
                  alt="Tas1"
                />
              </div>
            </center>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
