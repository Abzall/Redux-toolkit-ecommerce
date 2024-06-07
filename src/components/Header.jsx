import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { SiRoamresearch } from "react-icons/si";
import { IoIosBasket } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { GrBasket } from "react-icons/gr";
import Navbar from "./Navbar";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";

const navigation = [
  "About us",
  "Categories",
  "Products",
  "Favorite",
  "Contact us",
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    dispatch(filterProductsByName(searchTerm));
  };

  return (
    // <header className="w-full flex justify-between items-center h-20 p-5 bg-gradient-to-r from-red-500 to-orange-500 text-white">

    //     <Link to='/' className="w-[300px] flex items-center gap-5">
    //       <SiRoamresearch size={30} />
    //       <h3 className="text-lg font-bold">Development</h3>
    //     </Link>

    //   <nav>
    //     <ul className="flex justify-between items-center gap-5">
    //       {navigation.map((item, index) => (
    //         <li
    //           className="text-lg font-semibold cursor-pointer hover:text-gray-300"
    //           key={index}
    //         >
    //           {item}
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>

    //   <div className="flex items-center gap-3">
    //     <GrFavorite
    //       size={25}
    //       className="font-semibold hover:text-gray-300 cursor-pointer"
    //     />
    //     <IoIosBasket
    //       size={25}
    //       className="font-semibold hover:text-gray-300 cursor-pointer"
    //     />
    //   </div>

    //   <div className="flex items-center justify-between">
    //     <form className="flex w-[300px] relative items-center bg-gray-900 rounded-md h-10 px-2 py-3 gap-4">
    //       <div className="cursor-pointer">
    //         <IoIosSearch size={25} />
    //       </div>

    //       <input
    //         className="w-full text-gray-800 bg-none outline-none rounded-sm focus:border p-1"
    //         type="text"
    //         placeholder="Search products..."
    //         value={searchTerm}
    //         onChange={handleSearchChange}
    //       />
    //     </form>
    //   </div>
    // </header>

    // <header className="w-full h-28 bg-gradient-to-r from-red-500 to-orange-500 text-white">
    //   <div className="container flex p-5 justify-between items-center">
    //     <div className="header-cnt-top-l">
    //       <Link to="/" className="w-[300px] flex items-center gap-5">
    //         <SiRoamresearch size={30} />
    //         <h3 className="text-lg font-bold">Development</h3>
    //       </Link>
    //     </div>

    //     <div className="relative flex items-center">
    //       <div className="mr-7 relative">
    //         <GrBasket size={25} />
    //         <div className="absolute bg-white w-5 h-5 rounded-[50%] left-4 top-[-6px]">
    //           <span className="absolute text-orange-500 top-[-2px] left-1.5">
    //             0
    //           </span>
    //         </div>
    //       </div>
    //       <div>
    //         <div className="absolute cursor-pointer text-orange-500 p-2">
    //           <IoIosSearch size={25} />
    //         </div>
    //         <div>
    //           <input
    //             type="text"
    //             placeholder="Search product..."
    //             className="w-[300px] h-10 outline-none focus:border placeholder:p-10"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="absolute top-17 left-6">
    //     <Navbar />
    //   </div>
    // </header>

    <header className="w-full h-20 bg-gradient-to-r from-red-500 to-orange-500 text-white flex items-center py-14">
      <div className="container relaitive">
        <div className="header-cnt">
          <div className="header-cnt-top border-b pb-2">
              <ul className="flex gap-5 justify-center">
                <li>
                  <Link to="/seller">Seller Center</Link>
                </li>
                <li className="border border-gray-300"></li>
                <li>
                  <Link to='/download'>Download</Link>
                </li>
                <li className="border border-gray-300"></li>
                <li className="flex items-center">
                  <span className="mr-3">Follow us on</span>
                  <ul className="flex items-center">
                    <li>
                      <a href="www.facebook.com"><FaFacebookSquare size={20}/></a>
                    </li>
                    <li className="mx-3">
                      <a href="www.linkedin.com"><FaLinkedin size={20}/></a>
                    </li>
                  </ul>
                </li>
              </ul>
          </div>
          <div className="header-cnt-bottom mt-4">
            <Navbar/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
