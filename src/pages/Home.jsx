import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const navigateHandler = () => {
     navigate('/product')
  }
  return (
    <div>
      <h1>I am Home Page</h1>
      <button className='Btn' onClick={navigateHandler}>Go to Product Page</button>
    </div>
  )
}

export default Home