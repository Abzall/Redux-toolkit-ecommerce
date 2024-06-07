import React, { useEffect } from "react";
import HeaderSlider from "../components/slider/HeaderSlider";
import Loader from "react-js-loader";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/slices/productSlice";
import { STATUS } from "../utils/status";
import ProductsList from "../components/ProductsList";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products.products);
  const productsStatus = useSelector((state) => state.products.productsStatus);
  const categories = useSelector((state) => state.category.categories)
  useEffect(() => {
    dispatch(getProducts(50));
  }, [dispatch]);

  if(!products) {
    return <p>Loading...</p>
  }
  const slugs = []
  categories.forEach(element => {
    const el = element.slug
    slugs.push(el)
  });
  const productCategories = []
  products.forEach(element => {
    const el = element.category
    productCategories.push(el)
  })

  let catProductOne = productCategories.filter(
    (product) => product === slugs[0]
  );
  // let catProductTwo = products.filter(
  //   (product) => product.category === categories[1]
  // );
  // let catProductTree = products.filter(
  //   (product) => product.category === categories[2]
  // );
  // let catProductFour = products.filter(
  //   (product) => product.category === categories[3]
  // );

  return (
    <main>
      <div className="my-10">
        <HeaderSlider />
      </div>
      <div className="bg-orange-200 my-10 shadow-lg">
        <div className="container">
          <div className="categories py-5 border-l-8 border-orange-600">
            <div className="categories-item">
              <div className="title-md mx-10">
                <h3 className="font-bold text-lg text-gray-600">
                  See Our Products
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {productsStatus === STATUS.LOADING ? (
          <Loader
            type="spinner-circle"
            bgColor="orange"
            color="orange"
            title={"spinner-circle"}
            size={50}
          />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
      <div>
        <div>
          {slugs[0]}
        </div>
        {productsStatus === STATUS.LOADING ? (
          <Loader
            type="spinner-circle"
            bgColor="orange"
            color="orange"
            title={"spinner-circle"}
            size={50}
          />
        ) : (
          <ProductsList products={catProductOne} />
        )}
      </div>
    </main>
  );
};

export default HomePage;
