import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const ProductDetail = () => {
  const [product, useProduct] = useState('')

  const { id } = useParams()

  const GetSingleProduct = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
    useProduct(response.data)
  }

  useEffect(() => {
    GetSingleProduct()
  }, [])

  return (
    <div>
      <h1>hello product details</h1>
      <div className='single-product-info'>
        <img src={product.image} height='200' width='200' />
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
        <p>{product.description}</p>

        <Link to={`/${product.id}/update`} className='btn btn-primary m-2'>
          Update
        </Link>
        <Link to={`/${product.id}/delete`} className='btn btn-danger m-2'>
          Delete
        </Link>
      </div>
    </div>
  )
}

export default ProductDetail
