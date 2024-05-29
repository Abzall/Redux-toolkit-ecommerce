import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const list = useSelector((state) => state.products.list);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = list.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [product, id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full h-screen bg-gray-600">
      <div className="w-[500px] h-[500px] bg-gray-500 m-auto">
        <h2 className="p-3 text-center text-lg font-bold">{product.title}</h2>
        <div className="flex gap-3 p-5">
          <div className="w-[50%]">
            <img src={product.images} alt="" />
          </div>
          <div className="w-[50%]">
            <p>{product.description}</p>
          </div>
        </div>
        <span className="pl-8 text-lg font-semibold">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductDetails;
