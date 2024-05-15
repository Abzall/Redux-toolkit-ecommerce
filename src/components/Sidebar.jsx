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
      <h3>Categories</h3>
      <ul>
        {list.map(({ id, name }) => (
          <li key={id}>
            <NavLink to={`categories/${id}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
