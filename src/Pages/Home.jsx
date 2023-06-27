import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div>home</div>
    </>
  );
}
