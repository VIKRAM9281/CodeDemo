import React from 'react'
import Navbar from './SubCompnents/Navbar'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
const AboutUs = () => {
  const EmployeeData=useSelector(state=>state.responceData.responceData)
  console.log(EmployeeData.length)
  return (
    <>
    <Navbar/>
     <div className="about-page">
      <h2>Employee list </h2>

  
    </div>
    {EmployeeData.length>=1? (<table className='custom-table' border={1}> 
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Age</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {
            EmployeeData.map((item,ind)=>{
              return(
                <tr>
                  <td>{ind+1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.Address}</td>
                  <td>{item.Age}</td>
                  <td>{item.message}</td>
                </tr>
              )
            })
          }
         
        </tbody>
      </table>):(<div className='mt-5'>No Employee Data </div>)}
    </>
  )
}

export default AboutUs