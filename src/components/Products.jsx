import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsByCategory } from '../store/slices/productSlice'

const Products = () => {
    const list = useSelector((state) => state.products.list)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductsByCategory())
    })
  return (
    <div>
        {list.map((item) => (
            <div key={item.id}>{item.title}</div>
        ))}
    </div>
  )
}

export default Products