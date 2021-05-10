import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { useHistory, useParams } from 'react-router'

const UpdateProduct = () => {
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    LoadProducts()
  }, [])

  const LoadProducts = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
    setImage(response.data.image)
    setName(response.data.name)
    setPrice(response.data.price)
    setDescription(response.data.description)
    setCategory(response.data.category)
  }

  const addData = async () => {
    let formField = new FormData()
    formField.append('name', name)
    formField.append('price', price)
    formField.append('description', description)
    formField.append('category', category)

    if (image !== null) {
      formField.append('image', image)
    }

    await axios({
      method: 'put',
      url: `http://127.0.0.1:8000/api/${id}/`,
      data: formField,
    }).then((response) => {
      console.log(response.data)
      history.push('/')
    })
  }

  return (
    <div className='container'>
      <div className='w-75 mx-auto shadow p-5'>
        <h2 className='text-center mb-4'>Update A Student</h2>

        <div className='form-group'>
          <img src={image} height='100' width='200' alt='' srcSet='' />
          <label>Upload Image</label>
          <input
            type='file'
            className='form-control'
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter Your Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter Your description Address'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter Your price Number'
            name='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control form-control-lg'
            placeholder='Enter Your Catgory Name'
            name='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button className='btn btn-primary btn-block' onClick={addData}>
          Update
        </button>
      </div>
    </div>
  )
}

export default UpdateProduct
