import React from 'react'
import {  useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const naigate = useNavigate();

  const useNavigateHandler = () => {
    naigate ("/product")
  }
  const {title} = useParams();
  return (
    <div>
      <h1>i am ProductDetails</h1>
      <h1>Product title - {title}</h1>
      <button className='btn' onClick={useNavigateHandler}>Go to Products</button>
    </div>
  )
}

export default ProductDetails