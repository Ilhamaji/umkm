import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import NotFound from "./Pages/NotFound";
import Tas from "./Pages/Products/Tas";
import Sepatu from "./Pages/Products/Sepatu";
import Dompet from "./Pages/Products/Dompet";
import Bouquet from "./Pages/Products/Bouquet";
import Topi from "./Pages/Products/Topi";
import Aksesoris from "./Pages/Products/Aksesoris";
// const LazyProducts = React.lazy(() => import("./Pages/Products"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={
            <Products />
            // <React.Suspense fallback="Loading...">
            //   <LazyProducts />
            // </React.Suspense>
          }
        />
        <Route path="/products/tas" element={<Tas />} />
        <Route path="/products/sepatu" element={<Sepatu />} />
        <Route path="/products/dompet" element={<Dompet />} />
        <Route path="/products/topi" element={<Topi />} />
        <Route path="/products/bouquet" element={<Bouquet />} />
        <Route path="/products/aksesoris" element={<Aksesoris />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
