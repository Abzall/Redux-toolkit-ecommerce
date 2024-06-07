import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOff } from "../store/slices/sidebarSlice";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOn = useSelector((state) => state.sidebar.isSidebarOn);
  const categories = useSelector((state) => state.category.categories);

  return (
    <div
      className={
        isSidebarOn
          ? "container absolute top-0 bg-white w-[300px] flex justify-between items-start border border-gray-500 z-10"
          : "hidden"
      }
    >
      <div>
        <span>All Categories</span>
        <ul>
          {categories.map((category, idx) => (
            <li key={idx}>
              <Link to={`category/${category}`} className="capitalize">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={() => dispatch(setSidebarOff())}>
        <IoIosCloseCircle />
      </button>
    </div>
  );
};

export default Sidebar;
