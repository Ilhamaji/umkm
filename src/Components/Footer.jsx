import React from "react";
import Stack from "../Assets/stack.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  let copyright = String.fromCodePoint(0x00a9);
  return (
    <>
      <img src={Stack} alt={Stack} className="w-full" />
      <div className="bg-white pb-10 overflow-hidden">
        <div className="text-lg mx-5">Produk Kirei Galeri</div>
        <div className="flex flex-wrap mx-5">
          <div className="flex-none">
            <Link to="/products/tas" className="text-3xl hover:text-pink-500">
              Tas
            </Link>{" "}
            <Link
              to="/products/dompet"
              className="text-3xl hover:text-pink-500"
            >
              Dompet
            </Link>
            <br />
            <Link
              to="/products/sepatu"
              className="text-3xl hover:text-pink-500"
            >
              Sepatu
            </Link>{" "}
            <Link
              to="/products/bouquet"
              className="text-3xl hover:text-pink-500"
            >
              Bouquet
            </Link>
            <br />
            <Link to="/products/topi" className="text-3xl hover:text-pink-500">
              Topi
            </Link>{" "}
            <Link
              to="/products/aksesoris"
              className="text-3xl hover:text-pink-500"
            >
              Aksesoris
            </Link>
          </div>
          <div className="flex mt-5 md:mt-0 md:ml-10">
            <table>
              <thead>
                <tr>
                  <td>Almat</td>
                  <td>
                    : Jl.Kh Ahmad Dahlan RT01, Ngeseng, Gemolong , Sragen 27274
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Facebook</td>
                  <td>
                    :{" "}
                    <a
                      className="hover:text-pink-500 font-semibold"
                      href="https://www.facebook.com/profile.php?id=100009602703519"
                    >
                      Omah Rajut Kirei
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Instagram</td>
                  <td>
                    :{" "}
                    <a
                      className="hover:text-pink-500 font-semibold"
                      href="http://instagram.com/kirei_galery"
                    >
                      kirei_galery
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Whatsapp</td>
                  <td>
                    :{" "}
                    <a
                      className="hover:text-pink-500 font-semibold"
                      href="http://wa.me/6282242059600"
                    >
                      082242059600
                    </a>
                    {" atau "}
                    <a
                      className="hover:text-pink-500 font-semibold"
                      href="http://wa.me/6281329390862"
                    >
                      081329390862
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex mt-5 font-semibold">
            Kami bergerak di bidang kerajinan tangan dengan berbagai macam
            produk, seperti: tas, topi dan sepatu yang berbahan utama benang
            rajut. Selain itu kami juga memproduksi produk lain seperti bouquet
            dan juga akrilik. Kemudian salah satu kelebihan dari kami adalah
            kami bisa menerima berbagai macam request dari pelanggan.
          </div>
        </div>
      </div>
      <div className="bg-neutral-800 w-full text-white text-center">
        <div className="py-5">Copyright {copyright} 2023 Kirei Galeri</div>
      </div>
    </>
  );
}
