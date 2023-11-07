import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../SubComponents/Navbar";

const Services = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      <div>Services</div>
    </>
  );
};

export default Services;
