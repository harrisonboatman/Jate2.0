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
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    // } else {
    //   return (

    //     <ul className="flex">
    //       <li className="mx-1">
    //         <Link to="/signup">
    //           Signup
    //         </Link>
    //       </li>
    //       <li className="mx-1">
    //         <Link to="/login">
    //           Login
    //         </Link>
    //       </li>
    //       <li className="mx-1">
    //         <Link to="/menu">
    //           Menu
    //         </Link>
    //       </li>
    //       <li className="mx-1">
    //         <Link to="/gallery">
    //           Gallery
    //         </Link>
    //       </li>
        
    //     </ul>

    //   );
    }
  }

  return (
    <header className
    // ="flex-row px-1"
    >

<nav class="bg-transparent px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 ">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="https://flowbite.com/" class="flex items-center">
  <Link to="/" className="hover:no-underline text-3xl font-bold text-white">
          JATE
          <span role="img" aria-label="taco">	🌮</span>
        </Link>
      <span class="self-center text-xl font-semibold whitespace-nowrap"></span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white ring-white hover:ring-4 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "><Link to="/login">
              Login
            </Link></button>
      <button type="button" class="text-white border-2 ring-white hover:bg-black hover:ring-2 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 "><Link to="/signup">
              Sign Up
            </Link></button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm rounded-lg md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button> 
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 justify-center ">
      <li>
      <button type="button" class="text-white ring-white hover:ring-4 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 ">
            <Link to="/">
              Home
            </Link></button>
      </li>
      <li>
      <button type="button" class="text-white ring-white hover:ring-4 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 ">About Us</button>
      </li>
      <li>
      <button type="button" class="text-white ring-white hover:ring-4 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 ">
            <Link to="/menu">
              Menu
            </Link></button>
      </li>
      <li>
      <button type="button" class="text-white ring-white hover:ring-4 hover:white ease-in-out duration-200 font-medium rounded-lg text-base px-2 py-1.5 text-center mr-3 md:mr-0 ">Contact</button>
      </li>
    </ul>
  </div>
  </div>
</nav>
      
      <nav>
        {showNavigation()}
      </nav>
    </header>
  );

}

export default Nav;
