import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="font-bold uppercase p-5 bg-gray-800">
      <Header />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default App;
