import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="uppercase p-5 bg-gray-800">
      <Header />
      <div className="flex gap-7">
        <Sidebar />
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default App;
