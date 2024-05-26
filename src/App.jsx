import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/Pages/ProductDetails";


const App = () => {
  return (
    <div className="uppercase p-5 bg-gray-800">
      <Header />
      <div className="flex gap-7">
        <Sidebar />
        <Hero />
        <Routes>
          {/* <Route path="/" element={<Products/>}/> */}
          <Route path="/products/:id" element={<ProductDetails/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
