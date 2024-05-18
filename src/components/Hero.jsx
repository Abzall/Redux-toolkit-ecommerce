import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../store/slices/productSlice";
import { useParams } from "react-router-dom";
import { fetchProductsByCategory } from "../store/slices/productSlice";
import Products from "./Products";


const Hero = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const list = useSelector((state) => state.categories.list);
  
  // const {categoryId } = useParams()

  const [isEnd, setEnd] = useState(false)
  const [cat, setCat] = useState(null)
  const [items, setItems] = useState([])

  useEffect(() => {
    if(!id) return

    setItems([])
    setEnd(false)

    dispatch(fetchProductsByCategory(id));
  }, [id, dispatch]);

  useEffect(()=> {
    if(!id || !list.length) return

    const category = list.find((item) => item.id === id * 1)

    setCat(category)
  }, [list, id])

  return (
    // <section className="w-full relative">
    //   <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
    //     {list.map(
    //       ({
    //         id,
    //         images,
    //         title,
    //         description,
    //         // category: { name: cat },
    //         price,
    //       }) => (
            
    //           <div className="product h-[300px] bg-white drop-shadow-2xl p-2 border" key={id}>
    //             <img
    //               src={images}
    //               alt=""
    //               className="w-full h-[60%] object-cover p-2"
    //             />
    //             <div className="m-2 bg-gray-100 p-2">
    //               <div>{cat}</div>
    //               <h2 className="text-xl font-semibold">{title}</h2>
    //               <p className="text-sm">{description}</p>
    //               <div className="flex justify-between items-center">
    //                 <p className="text-xl font-bold">${price}.00</p>
                    
    //               </div>
    //             </div>
    //           </div>
         
    //       )
    //     )}
    //   </div>
    // </section>

    <section >
      <h2 >{cat?.name}</h2>

      

      
        <div className="preloader">Loading...</div>
      
        <div >
          <span>No results</span>
          {/* <button onClick={handleReset}>Reset</button> */}
        </div>
      
        <Products
          title=""
          products={items}
          style={{ padding: 0 }}
          amount={items.length}
        />
      

      {!isEnd && (
        <div >
          {/* <button
            onClick={() =>
              setParams({ ...params, offset: params.offset + params.limit })
            }
          >
            See more
          </button> */}
        </div>
      )}
    </section>
  );
};

export default Hero;
