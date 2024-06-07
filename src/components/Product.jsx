import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({product, discountedPrice}) => {
    
  return (
    <Link to={`/product/${product?.id}`} key={product?.id} className='border p-5 shadow-lg'>
        <div>{product?.category}</div>
        <div>
            <img src={product?.images} alt={product.title} className='w-[300px] h-[300px] object-cover bg-center'/>
        </div>
        <div>
            <div>
                <span>Brand: </span>
                <span>{product?.brand}</span>
            </div>
            <div>
                <h3 className='font-bold'>{product?.title}</h3>
            </div>
            <div className='flex items-center justify-between'>
                <span>
                    ${product?.price}
                </span>
                <span>
                    ${product?.discountedPrice}
                </span>
                <span>
                    ({product?.discountedPercentage}% Off)
                </span>
            </div>
        </div>
    </Link>
  )
}

export default Product