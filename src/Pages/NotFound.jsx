import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <center>
      <div className="text-4xl md:text-5xl font-bold text-white rounded-md align-center mt-[45vh] bg-zinc-800 w-96">
        404 Not Found
      </div>
      <Link to="/" className="hover:text-white hover:underline">
        Klik Untuk Kemnbali Ke Halaman Utama
      </Link>
    </center>
  );
}
