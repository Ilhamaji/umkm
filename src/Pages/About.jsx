import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="flex w-full justify-center">
        <div className="flex flex-wrap justify-center mx-5 w-fit md:mx-10 mt-5 xl:mt-28 py-12 md:px-5 bg-neutral-950 rounded-3xl">
          <iframe
            className="md:w-110 w-96 h-100 mx-5 md:mx-0"
            src="https://www.youtube.com/embed/0fWy3K8iCB8?modestbranding=1&rel=0&controls=0"
            title="Kirey Gallery"
            frameborder="0"
            allowfullscreen
          ></iframe>

          <div className="w-100 mt-5 lg:mt-0 md:w-120 mx-10 text-white">
            <div className="text-5xl mb-2 bg-neutral-800 w-fit px-5 py-2 rounded-md font-bold">
              Kirei Galeri
            </div>
            <div className="bg-neutral-800 w-fit md:mt-10 px-5 py-2 rounded-md">
              Kirei Galeri adalah usaha yang bergerak dibidang kerajinan tangan
              dengan berbagai macam produk, seperti tas, topi, sepatu yang
              berbahan utama yaitu benang rajut. Kirei Galeri berawal dari hobi
              yang kami lakukan di rumah, yang kemudian menarik minat pembeli,
              lalu kami mengembangkan usaha ini secara online melalui sosial
              media seperti instagram dan whatsapp. Kemudian seiring berjalannya
              waktu karena semakin banyak pembeli dan di daerah kami belum
              adanya toko rajutan maka kami membuka toko dengan nama kirei
              galeri.
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <iframe
          title="gmaps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.28802696650484!2d110.82817139636602!3d-7.397696083561781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1689965133028!5m2!1sen!2sid"
          className="flex mt-10 mx-5 md:mx-10 lg:mx-15 xl:mx-20 2xl:mx-36 rounded-lg justfy-self-center w-full h-80"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </>
  );
}
