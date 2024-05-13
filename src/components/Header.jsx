import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { SiRoamresearch } from "react-icons/si";
import { IoIosBasket } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center h-20 bg-gray-800 text-gray-400">
      <div className="w-[300px] flex items-center gap-5">
        {/* <Link>
          <img src="#" alt="logo" />
        </Link> */}
        <SiRoamresearch size={30} />
        <h3>Development</h3>
      </div>

      <nav>
        <ul className="flex justify-between items-center gap-2">
          <li>About us</li>
          <li>Categories</li>
          <li>Products</li>
          <li>Favorite</li>
          <li>Contact us</li>
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        <GrFavorite size={25} />
        <IoIosBasket size={25} />
      </div>

      <div className="flex items-center justify-between">
        <form className="flex w-[300px] relative items-center bg-gray-900 rounded-md h-7 px-2 py-3 gap-4">
          <div className="cursor-pointer">
            <IoIosSearch size={20} />
          </div>

          <input
            className="w-full text-gray-800 bg-none outline-none rounded-sm"
            type="text"
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
