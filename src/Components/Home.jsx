import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../SubComponents/Navbar'
import Section from '../SubComponents/Section'
import Slider from '../SubComponents/Slider'
import Footer from '../SubComponents/Footer'

const Home = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Navbar />}/>
   </Routes>
   <Routes>
   <Route path="/" element={<Section />}/>
   </Routes>
   {/* <Routes>
   <Route path="/" element={<Slider />}/>
   </Routes> */}
   <Routes>
   <Route path="/" element={<Footer />}/>
   </Routes>
   </>
  )
}

export default Home