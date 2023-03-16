import React, { createRef, useEffect, useRef } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS, QUERY_USER } from '../../utils/queries';
import { gsap } from "gsap";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


function Nav() {
  const {data} = useQuery(QUERY_USER);
  let user;
  let role;
  let manager = false;
  let admin = false;
  let customer = true;
  if(data) {
    user = data.user;
    role = data.user.userType;
  }
  if(role !== 'customer') {
    manager = true;
    customer= false;
    admin = true;
  }
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <nav className="bg-black px-2 sm:px-4 py-1 fixed w-full z-20 top-0 left-0 ">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com/" className="flex items-center">
              <Link
                to="/"
                className=" text-3xl font-bold text-green-500"
              >
                JATE
                <span role="img" aria-label="taco">
                  {" "}
                  🌮
                </span>
              </Link>
              <span className="self-center text-xl font-semibold whitespace-nowrap"></span>
            </a>
            <div className="flex md:order-2">
              <button
                type="button"
                className=" text-white hover:text-green-500 lg:text-xl ring-white hover:ring-2 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
              >
                <Link to="/orderHistory">Order History</Link>
              </button>

              <button
                type="button"
                className="text-white hover:text-green-500 lg:text-xl ring-white hover:ring-2 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0"
                href="/"
                onClick={() => Auth.logout()}
              >
                Logout
              </button>
            </div>
            <div
              className="items-center justify-between  md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-row lg:p-4 lg:mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  sm:m-0 sm:p-0 justify-center">
                <li>
                  <button
                    type="button"
                    className="text-white hover:text-green-500 lg:text-xl ring-white hover:ring-2 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                  >
                    <Link to="/">Home</Link>
                  </button>
                </li>
                
                <li>
                  <button
                    type="button"
                    className="text-white hover:text-green-500 lg:text-xl ring-white hover:ring-2 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                  >
                    <Link to="/menu">Menu</Link>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-white hover:text-green-500 lg:text-xl ring-white hover:ring-2 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                  >
                    <Link to ="/contact">
                    Contact
                    </Link>
                  </button>
                </li>
                {!customer ? (<li>
                  <button
                    type="button"
                    className="text-white hover:text-green-500 lg:text-xl ring-white hover:ring-2 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                  >
                    <Link to ="/management">Order Management</Link>
                  </button>
                </li>): null}
                
              </ul>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <header
          className
          ="flex-row px-1"
        >
          <nav className="bg-black px-2 sm:px-4 py-1.1 fixed w-full z-20 top-0 left-0 ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <a href="https://flowbite.com/" className="flex items-center">
                <Link
                  to="/"
                  className=" text-3xl font-bold hover:text-white text-green-500"
                >
                  JATE
                  <span role="img" aria-label="taco">
                    {" "}
                    🌮
                  </span>
                </Link>
                <span className="self-center text-xl font-semibold whitespace-nowrap"></span>
              </a>
              <div className="flex md:order-2">
                <button
                  type="button"
                  className="text-white hover:text-green-500 lg:text-xl ring-white hover:ring-2 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                >
                  <Link to="/login">Login</Link>
                </button>
                <button
                  type="button"
                  className="text-white hover:text-green-500 lg:text-xl ring-white hover:ring-2 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                >
                  <Link to="/signup">Sign Up</Link>
                </button>
              </div>
              <div
              className="items-center justify-between  md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-row lg:p-4 lg:mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  sm:m-0 sm:p-0 justify-center ">
                  <li>
                    <button
                      type="button"
                      className="text-white hover:text-green-500 lg:text-xl ring-white hover:ring-2 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                    >
                      <Link to="/">Home</Link>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="text-white hover:text-green-500 lg:text-xl ring-white hover:ring-2 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                    >
                      <Link to="/menu">Menu</Link>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="text-white hover:text-green-500 lg:text-xl ring-white hover:ring-2 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                    >
                      <Link to ="/contact">
                    Contact
                    </Link>
                    </button>
                  </li> 
                </ul>
              </div>
            </div>
          </nav>
        </header>
      );
    }
  }

  return (
    <nav>
        {showNavigation()}
      </nav>
  )

}
export default Nav;
