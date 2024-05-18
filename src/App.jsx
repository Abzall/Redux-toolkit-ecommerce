import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="font-bold uppercase p-5 bg-gray-800">
      <Header />
      <div className="flex gap-7">
        <Sidebar />
        <Hero />
        {/* <Products/> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
