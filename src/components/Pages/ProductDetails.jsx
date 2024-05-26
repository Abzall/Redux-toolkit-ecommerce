import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams()
    const list = useSelector((state) => state.products.list)
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const selectedProduct = list.find((item) => item.id === id)
        setProduct(selectedProduct)
    }, [product, id])
  return (
    <div>
        <h2>Product Details</h2>
        {
            list.map(({id, title, description}) => (
                <div key={id}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ProductDetails