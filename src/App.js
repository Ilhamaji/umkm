import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Sepatu from "./Pages/Products/Sepatu";
import Dompet from "./Pages/Products/Dompet";
import Bouquet from "./Pages/Products/Bouquet";
import Topi from "./Pages/Products/Topi";
import Aksesoris from "./Pages/Products/Aksesoris";
import Tas from "./Pages/Products/Tas";
const LazyProducts = React.lazy(() => import("./Pages/Products"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={
            <React.Suspense
              fallback={
                <div className="flex justify-center">
                  <div className="animate-spin bg-black w-12 h-12 text-center align-middle rounded-full text-4xl bold text-white">
                    ↻
                  </div>
                </div>
              }
            >
              <LazyProducts />
            </React.Suspense>
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
