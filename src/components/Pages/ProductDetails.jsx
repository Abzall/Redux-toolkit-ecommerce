import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams()
    const list = useSelector((state) => state.products.list)
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const selectedProduct = list.find((item) => item.id === parseInt(id))
        setProduct(selectedProduct)
    }, [product, id])

    if(!product) {
        return <div>Product not found</div>
    } 
    
  return (
    
    <div>
        <h2>Product Details</h2>
        <h2>{product.title}</h2>
        <div>
            <img src={product.images} alt="" />
        </div>
    </div>
  )
}

export default ProductDetails