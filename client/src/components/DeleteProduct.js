import axios from 'axios'
import React, { useState, useEffect } from 'react'

import { useHistory, useParams } from 'react-router'

const DeleteProduct = () => {
  const [name, setName] = useState('')
  const history = useHistory()
  const { id } = useParams()

  useEffect(() => {
    LoadProducts()
  }, [])

  const LoadProducts = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
    setName(response.data.name)
  }

  const addData = async () => {
    await axios({
      method: 'delete',
      url: `http://127.0.0.1:8000/api/${id}/`,
    }).then((response) => {
      console.log(response.data)
      history.push('/')
    })
  }

  return (
    <div>
      <h1>product delete view</h1>
      <p>the product name is : {name}</p>
      <button className='btn btn-danger btn-block' onClick={addData}>
        Update
      </button>
    </div>
  )
}

export default DeleteProduct
