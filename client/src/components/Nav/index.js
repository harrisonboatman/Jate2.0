import React, { createRef, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <nav className="bg-black px-2 sm:px-4 py-1.1 fixed w-full z-20 top-0 left-0 ">
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
                className=" text-white hover:bg-green-500 lg:text-xl ring-white hover:ring-4 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
              >
                <Link to="/orderHistory">Order History</Link>
              </button>

              <button
                type="button"
                className="text-white hover:bg-green-500 lg:text-xl ring-white hover:ring-4 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0"
                href="/"
                onClick={() => Auth.logout()}
              >
                Logout
              </button>

              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm rounded-lg md:hidden"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 justify-center ">
                <li>
                  <button
                    type="button"
                    className="text-white hover:bg-green-500 lg:text-xl ring-white hover:ring-4 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                  >
                    <Link to="/">Home</Link>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-white hover:bg-green-500 lg:text-xl ring-white hover:ring-4 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-white hover:bg-green-500 lg:text-xl ring-white hover:ring-4 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                  >
                    <Link to="/menu">Menu</Link>
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="text-white hover:bg-green-500 lg:text-xl ring-white hover:ring-4 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                  >
                    Contact
                  </button>
                </li>
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
                  className="text-white lg:text-xl ring-white hover:ring-4 hover:bg-green-500 ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                >
                  <Link to="/login">Login</Link>
                </button>
                <button
                  type="button"
                  className="text-white lg:text-xl border-2 ring-offset-2 ring-gradient-to-br from-green-400 to-green-700 hover:ring-2 hover:bg-green-500 ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                >
                  <Link to="/signup">Sign Up</Link>
                </button>
                <button
                  data-collapse-toggle="navbar-sticky"
                  type="button"
                  className="inline-flex items-center p-2 text-sm rounded-lg md:hidden"
                  aria-controls="navbar-sticky"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-sticky"
              >
                <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 justify-center ">
                  <li>
                    <button
                      type="button"
                      className="text-white lg:text-xl ring-white hover:ring-4 hover:bg-green-500 ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                    >
                      <Link to="/">Home</Link>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="text-white lg:text-xl ring-white hover:ring-4 hover:bg-green-500 ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                    >
                      About Us
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="text-white lg:text-xl ring-white hover:ring-4 hover:bg-green-500 ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                    >
                      <Link to="/menu">Menu</Link>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="text-white hover:bg-green-500 lg:text-xl ring-white hover:ring-4 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "
                    >
                      Contact
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
