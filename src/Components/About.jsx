import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../SubComponents/Navbar";

const About = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      <div>About</div>
    </>
  );
};

export default About;
