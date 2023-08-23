import React from 'react'
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
   
    <>
 <div>
      <div className="navbar">
        <ul className="nav-links">
        <NavLink to="/" className="nav-link">
            <button className="nav-button">Home</button>
          </NavLink>
          <NavLink to="/Dashboard" className="nav-link">
            <button className="nav-button">DashBoard</button>
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            <button className="nav-button">Contact</button>
          </NavLink>
          <NavLink to="/portfolio" className="nav-link">
            <button className="nav-button">Portfolio</button>
          </NavLink>
          <NavLink to="/about" className="nav-link">
            <button className="nav-button">About</button>
          </NavLink>
        </ul>
      </div>
      {/* Your main content here */}
    </div>
    </>
  )
}

export default Navbar