import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "../SubComponents/Navbar";

const Contact = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Navbar />}/>
   </Routes>
    <div>Contact</div>
    </>
  )
}

export default Contact