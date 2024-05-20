import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slices/productSlice";


const Hero = () => {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.products.list);
console.log(list);
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  

  return (
    <section className="w-full relative">
      <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
        {list.map(
          ({
            title,
            id,
            images,
            description,
            // category: { name: cat },
            price,
          }) => (
            
              <div className="product h-[300px] bg-white drop-shadow-2xl p-2 border" key={id}>
          
                <img
                  src={images}
                  alt=""
                  className="w-full h-[60%] object-cover p-2"
                />
                <div className="m-2 bg-gray-100 p-2">
                  {/* <div>{cat}</div> */}
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="text-sm">{description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-bold">${price}.00</p>
                    
                  </div>
                </div>
              </div>
         
          )
        )}
      </div>
    </section>

    
  );
};

export default Hero;
