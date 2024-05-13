import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../store/slices/categoriesSlice";

const Sidebar = () => {
 
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const list = useSelector((state) => state.categories.list)
    return (
    <div className="w-[300px] bg-slate-700 p-3">
      <h3>Categories</h3>
      {list.map(({id, name}) => (
        <ul key={id}>
            <li>{name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Sidebar;
