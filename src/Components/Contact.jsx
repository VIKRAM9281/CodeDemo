import React, { useState } from 'react'
import Navbar from './SubCompnents/Navbar'
import { EmployeeData } from './ResponceSlice'
import { useDispatch } from 'react-redux'
const Contact = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [Address,setAddress]=useState("")
  const [Age,setAge]=useState("")
  const [message,setMessage]=useState("")
  const Dispatch=useDispatch()
const HandleSubmit=(e)=>{
  e.preventDefault()
  const empobj={
    name:name,
    email:email,
    Address:Address,
    Age:Age,
    message:message
  }
  Dispatch(EmployeeData(empobj))
}

  return (
   <>
   <Navbar/>
   <div className="contact-page">
      <h2> * Create Employee *</h2>
        <form action='' onSubmit={HandleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"
           autoComplete='off'
           value={name}
           onChange={(e) => setName(e.target.value)}
            />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"
           autoComplete='off'
           value={email} 
           onChange={(e) => setEmail(e.target.value)} />

          <label htmlFor="address">Address:</label>
          <input type="text" id="Address" name="Address"
           autoComplete='off'
           value={Address}
           onChange={(e) => setAddress(e.target.value)} />
          <label htmlFor="Age">Age</label>
          <input type="text" id="Age" name="Age"
           autoComplete='off'
           value={Age}
           onChange={(e) => setAge(e.target.value)} />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"
           cols="2" rows="10"
           value={message}
           onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit">Submit</button>
        </form>
    </div>
   </>
  )
}

export default Contact