import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="flex w-full justify-center">
        <div className="flex flex-wrap justify-center mx-5 w-fit md:mx-10 mt-5 xl:mt-28 py-5 md:px-5 bg-neutral-950 rounded-3xl">
          <div className="bg-neutral-800 cursor-default mx-5 md:mx-10 py-7 h-fit w-80 md:w-96 rounded-3xl group">
            <center>
              <div className="h-48 overflow-hidden w-85 duration-300 rounded-3xl">
                <img
                  className="flex z-0 h-100 -translate-y-10 md:-translate-y-36 duration-300"
                  alt="Tas1"
                />
              </div>

              <div className="w-85 h-px my-5 bg-slate-300"></div>
              <div className="flex justify-between px-7">
                <div className="text-4xl text-white w-10 font-semibold">
                  Tas
                </div>
                <div className="py-2 w-40 shadow-md shadow-pink-500 hover:shadow-none hover:bg-neutral-300 font-semibold rounded-3xl bg-white cursor-pointer duration-200">
                  🛒 Beli Sekarang
                </div>
              </div>
            </center>
          </div>

          <div className="w-100 mt-5 lg:mt-0 md:w-120 mx-10 text-white">
            <div className="text-3xl mb-2 font-bold">About</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            mollitia maxime repudiandae vero? Unde ab, temporibus earum harum,
            voluptates error incidunt beatae explicabo libero, officiis totam
            dolor rem sit illum. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Doloremque perspiciatis aliquid cupiditate,
            pariatur quisquam dolore iusto corrupti quasi aliquam dolorem eaque
            ad, deserunt exercitationem tenetur accusantium ut libero excepturi
            natus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, minima quam aspernatur ipsum at inventore repellendus
            laudantium corporis hic laborum modi ea maxime, quibusdam ipsam fuga
            porro ex id! Assumenda!. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Velit harum molestias architecto similique,
            laborum, esse maxime animi excepturi vitae vel vero veniam molestiae
            itaque magnam, possimus commodi sunt dolor. Itaque.
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
