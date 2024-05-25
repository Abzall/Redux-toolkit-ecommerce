import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { SiRoamresearch } from "react-icons/si";
import { IoIosBasket } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { filterProductsByName } from "../store/slices/productSlice";

const navigation = [
  "About us",
  "Categories",
  "Products",
  "Favorite",
  "Contact us",
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
    dispatch(filterProductsByName(searchTerm))
  }

  return (
    <header className="w-full flex justify-between items-center h-20 bg-gray-800 text-gray-400">
      <div className="w-[300px] flex items-center gap-5">
        {/* <Link>
          <img src="#" alt="logo" />
        </Link> */}
        <SiRoamresearch size={30} />
        <h3 className="text-lg font-bold">Development</h3>
      </div>

      <nav>
        <ul className="flex justify-between items-center gap-5">
          {navigation.map((item, index) => (
            <li className="text-lg font-semibold cursor-pointer hover:text-gray-300" key={index}>{item}</li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        <GrFavorite size={25}  className="font-semibold hover:text-gray-300 cursor-pointer"/>
        <IoIosBasket size={25} className="font-semibold hover:text-gray-300 cursor-pointer"/>
      </div>

      <div className="flex items-center justify-between">
        <form className="flex w-[300px] relative items-center bg-gray-900 rounded-md h-10 px-2 py-3 gap-4">
          <div className="cursor-pointer">
            <IoIosSearch size={25} />
          </div>

          <input
            className="w-full text-gray-800 bg-none outline-none rounded-sm focus:border p-1"
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
