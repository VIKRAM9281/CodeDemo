import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../SubComponents/Navbar";

const Cources = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      <div>Cources</div>
    </>
  );
};

export default Cources;
