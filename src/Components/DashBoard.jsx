import React from 'react'
import Navbar from './SubCompnents/Navbar'

const DashBoard = () => {
  return (
   <>
   <Navbar/>
    <div className="dashboard">
    <h2>Dashboard</h2>
    <p>Welcome to your dashboard! This is where you can view important information.</p>
  </div>
   </>
  )
}

export default DashBoard