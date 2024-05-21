import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slices/productSlice";

const Products = () => {

  const dispatch = useDispatch();
  const filteredProducts = useSelector((state) => state.products.filtered)
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <section className="w-full relative">
      <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4">
        {filteredProducts.map(
          ({
            title,
            id,
            images,
            description,
            category: { name: cat },
            price,
          }) => (
            <div
              className="h-[350px] bg-slate-700 drop-shadow-2xl p-2 border border-neutral-700"
              key={id}
            >
              <img
                src={images}
                alt=""
                className="w-full h-[60%] object-cover p-2"
              />
              <div className="m-2 bg-gray-800 p-2 border border-neutral-700">
                <div className="text-gray-500">{cat}</div>
                <h2 className="text-xl font-normal text-gray-300">{title}</h2>
                <p className="text-sm text-gray-300">{description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-gray-500">${price}.00</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Products;
