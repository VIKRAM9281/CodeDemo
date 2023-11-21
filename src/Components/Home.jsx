import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Navbar from "../SubComponents/Navbar";
import Section from "../SubComponents/Section";
import Slider from "../SubComponents/Slider";
import Footer from "../SubComponents/Footer";
import img1 from "../assets/img/artificial-intelligence-3382507_1280.jpg";
import cardsdata from "../jsondata/Cards.json";
const Home = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Section />} />
      </Routes>
      {/* Cards Starts */}
      <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6,col-lg-3 ">
        {cardsdata.languageData?.map((item,ind)=>{
          return(
            <>
             <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <a href="#">
          <img className="rounded-t-lg" src={item.url} alt="" />
        </a>
        <div className="p-5">
          <NavLink
            to={"/"}
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
           {item.name}
          </NavLink>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {item.Description}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
 
            </>
          )
        })}
        </div>
      </div>
      </div>
          {/* Cards End */}

      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>
    </>
  );
};

export default Home;
