import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ShowProducts = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/')
    setProducts(response.data)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>
      <h1>Show All Products</h1>
      {products.map((pros) => (
        <div key={pros.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={pros.image} />
            <Card.Body>
              <Card.Title>Title: {pros.name}</Card.Title>
              <Card.Text>Description: {pros.description}</Card.Text>
              <Card.Text>Price: {pros.price}</Card.Text>
              <Card.Text>category: {pros.category}</Card.Text>
              <Link className='btn btn-primary' to={`/${pros.id}`}>
                Go Product Details
              </Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default ShowProducts
