import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/about"
import ContactUs from "./pages/contactUs"
import Career from "./pages/career"
import Awards from "./pages/awards";
import Product from "./pages/product";
import QualityPolicy from "./pages/qualityPolicy";
import Strategy from "./pages/strategy";


function App() {
  return (
      <Routes>
        <Route index element={<Home/>}  />
        <Route path="/about-us" element={<About/>}  />
        {/* <Route path="/awards" element={<Awards/>}  /> */}
        <Route path="/products" element={<Product/>}  />
        <Route path="/contact-us" element={<ContactUs/>}  />
        <Route path="/career" element={<Career/>}  />
        <Route path="/quality-policy" element={<QualityPolicy/>}  />
        <Route path="/strategy" element={<Strategy/>}  />
    </Routes>
  );
}

export default App;
