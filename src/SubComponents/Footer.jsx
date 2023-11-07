import React from "react";
import Logo from "../assets/img/logoreact.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <NavLink to={"/"}  className="flex items-center mb-4 sm:mb-0">
              <img src={Logo} className="h-8 mr-3 Logo" alt="Logo" />
                </NavLink>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <NavLink to={"/About"} className="mr-4 hover:underline md:mr-6 ">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to={"/"} className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </NavLink>
              </li>
              <li>
                <NavLink to={"/Contact"} className="hover:underline">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="http://reactdevacademy.online/"
              target="blank"
              className="hover:underline"
            >
              ReactDevAcademy™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
