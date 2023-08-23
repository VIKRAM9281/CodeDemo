import React from 'react'
import Navbar from './SubCompnents/Navbar'

const AboutUs = () => {
  return (
    <>
    <Navbar/>
     <div className="about-page">
      <h2>About Us</h2>
      <p>Learn more about our company and team.</p>
      <div className="team-members">
        <div className="team-member">
          <h3>vikram</h3>
          <p>React Developer</p>
        </div>
        <div className="team-member">
          <h3>Anjali Chavan</h3>
          <p>React Developer</p>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
    </>
  )
}

export default AboutUs