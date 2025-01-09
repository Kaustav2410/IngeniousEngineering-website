import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/about"
import ContactUs from "./pages/contactUs"
import Career from "./pages/career"
import Awards from "./pages/awards";


function App() {
  return (
      <Routes>
        <Route index element={<Career/>}  />
        <Route path="/about-us" element={<About/>}  />
        <Route path="/awards" element={<Awards/>}  />
    </Routes>
  );
}

export default App;
