import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { GiBeachBag } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOn } from "../store/slices/sidebarSlice";

const Navbar = () => {

  const dispatch = useDispatch()
  const categories = useSelector((state) => state.category.categories)
  // console.log(categories);

  return (
    <nav className="flex items-center justify-between">
      <div className="flex">
        <button type="button" onClick={() => dispatch(setSidebarOn())}>
          <HiOutlineBars3 size={25} />
        </button>
      </div>

      <div>
        <ul className="flex gap-2 capitalize">
          {categories.slice(0, 8).map((category, idx) => (
            <li key={idx}>
              <Link to={`category/${category}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center">
        <Link to="/" className="flex items-center mx-3">
          <span className="mr-3">
            <GiBeachBag size={20} />
          </span>
        </Link>
        <div className="flex items-center bg-white rounded-lg">
          <input type="text" placeholder="Search Product..." className="outline-none placeholder:p-1"/>
          <FaSearch size={20} className="text-orange-500" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
