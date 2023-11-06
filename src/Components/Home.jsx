import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../SubComponents/Navbar'
import Section from '../SubComponents/Section'
import Slider from '../SubComponents/Slider'

const Home = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Navbar />}/>
   </Routes>
   <Routes>
   <Route path="/" element={<Section />}/>
   </Routes>
   <Routes>
   <Route path="/" element={<Slider />}/>
   </Routes>
   <h1>Hello</h1>
   </>
  )
}

export default Home