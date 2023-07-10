import React from "react";
import Stack from "../Assets/stack.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  let copyright = String.fromCodePoint(0x00a9);
  return (
    <>
      <img src={Stack} className="w-full" alt="" srcset="" />
      <div className="bg-white pb-10">
        <div className="text-lg mx-5">Produk Kirei Galeri</div>
        <div className="flex mx-5">
          <div className="flex-none mr-10">
            <Link to="/product/tas" className="text-3xl hover:text-pink-500">
              Tas
            </Link>{" "}
            <Link to="/product/tas" className="text-3xl hover:text-pink-500">
              Dompet
            </Link>
            <br />
            <Link to="/product/tas" className="text-3xl hover:text-pink-500">
              Sepatu
            </Link>{" "}
            <Link to="/product/tas" className="text-3xl hover:text-pink-500">
              Bouquet
            </Link>
            <br />
            <Link to="/product/tas" className="text-3xl hover:text-pink-500">
              Topi
            </Link>{" "}
            <Link to="/product/tas" className="text-3xl hover:text-pink-500">
              Aksesoris
            </Link>
            <br />
          </div>
          <div className="flex-1">
            <table>
              <tr>
                <td>Almat</td>
                <td>
                  : Jl.Kh Ahmad Dahlan RT01, Ngeseng, Gemolong , Sragen 27274
                </td>
              </tr>
              <tr>
                <td>Facebook</td>
                <td>
                  :{" "}
                  <a
                    className="hover:text-pink-500"
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
                    className="hover:text-pink-500"
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
                    className="hover:text-pink-500"
                    href="http://wa.me/082242059600"
                  >
                    082242059600
                  </a>
                  {" atau "}
                  <a
                    className="hover:text-pink-500"
                    href="http://wa.me/081329390862"
                  >
                    081329390862
                  </a>
                </td>
              </tr>
            </table>
          </div>
          <div className="flex-1">
            Kami bergerak di bidang kerajinan tangan dengan berbagai macam
            produk, seperti: tas, topi dan sepatu yang berbahan utama benang
            rajut. Selain itu kami juga memproduksi produk lain seperti bouquet
            dan juga akrilik. Kemudian salah satu kelebihan dari kami adalah
            kami bisa menerima berbagai macam request dari pelanggan.
          </div>
        </div>
      </div>
      <div className="bg-neutral-800 w-full text-white text-center">
        <div className="py-5">Copyright {copyright} 2023 Kirei Gallery</div>
      </div>
    </>
  );
}
