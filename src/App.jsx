import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/about"
import ContactUs from "./pages/contactUs"

function App() {
  return (
    <Routes>
        <Route index element={<Home/>}  />
        <Route path="/about-us" element={<About/>}  />
    </Routes>
  );
}

export default App;
