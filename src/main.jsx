import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app";
import "./index.css";
import Navbar from "./components/custom/navbar";
import Footer from "./components/custom/footer";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
      <Navbar/>
    <App />
    <Footer/>
   </BrowserRouter>
);
