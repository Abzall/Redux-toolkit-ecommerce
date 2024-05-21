import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/slices/categoriesSlice";
import { NavLink } from "react-router-dom";
import {
  filterProductsByCategory,
  showAllProducts,
} from "../store/slices/productSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.categories.list);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
    dispatch(filterProductsByCategory(categoryId));
  };

  return (
    <div className="w-[300px] bg-slate-700 p-3 h-[500px]">
      <h3 className="mb-3 font-bold text-gray-400">Categories</h3>
      <nav>
        <span className="text-gray-400 font-normal cursor-pointer hover:text-gray-300" onClick={() => dispatch(showAllProducts())}>All Products</span>
        {list.map(({ id, name }) => (
          <ul key={id}>
            <li className="text-gray-400 font-normal cursor-pointer mb-1 hover:text-gray-300" onClick={() => handleCategoryClick(id)}>{name}</li>
          </ul>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
