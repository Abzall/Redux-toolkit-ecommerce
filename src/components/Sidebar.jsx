import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/slices/categoriesSlice";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const list = useSelector((state) => state.categories.list);
  return (
    <div className="w-[300px] bg-slate-700 p-3">
      <h3>Navigation</h3>
      <nav>
        <ul className="gap-2 mt-5">
          <li>About us</li>
          <li>Categories</li>
          <li>Products</li>
          <li>Favorite</li>
          <li>Contact us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
