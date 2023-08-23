import React from 'react'
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
   
    <>
    <ul>
        <NavLink>
            <button>DashBoard</button>
        </NavLink>
        <NavLink>
            <button>Contact</button>
        </NavLink>
        <NavLink>
            <button>Portfolio</button>
        </NavLink>
        <NavLink>
            <button>About</button>
        </NavLink>
    </ul>
    </>
  )
}

export default Navbar