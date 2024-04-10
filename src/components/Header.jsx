import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className="w-full flex items-center px-5 py-5 bg-gray-800 text-gray-400">
      <div className="w-[300px]">
        {/* <Link>
          <img src="#" alt="logo" />
        </Link> */}
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
