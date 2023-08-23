import React from 'react'
import Navbar from './SubCompnents/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <p>Explore and discover amazing things!</p>
    </div>
    </>
  )
}

export default Home