import React from "react";
import Product from "./Product";

const ProductsList = ({ products }) => {
    if(!products) {
        return <p>Loading...</p>
    }
  return (
    <div className="container flex flex-wrap gap-5 justify-around">
      {products.map((product) => {
        let discountedPrice =
          (product.price) - (product.price * (product.discountPercentage / 100));
        return (
          <Product product={{ ...product, discountedPrice }} />
        );
      })}
    </div>
  );
};

export default ProductsList;
