import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";


const Burger = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () => {
        setNav(!nav);
    }

    return (


        <div className={nav ? 'hidden' : 'w-1/2 h-screen bg-blue-600/30 text-center left-[-100%] ease-in duration-500'}>
      <ul className='flex flex-col items-center justify-center h-[50vh] list-disc'>
        <li className='font-bold text-2xl my-6 text-gray-300 cursor-pointer'>
            <Link to="/"> Home</Link>
        </li>
        <li className='font-bold text-2xl my-6 text-gray-300 cursor-pointer'>
            <Link to="/"> About Us</Link>
        </li>
        <li className='font-bold text-2xl my-6 text-gray-300 cursor-pointer'>
            <Link to="/menu"> Menu</Link>
        </li>
        <li className='font-bold text-2xl my-6 text-gray-300 cursor-pointer'>
            <Link to="/contact"> Contact</Link>
        </li>
      </ul>
      

    </div>
    )
}

export default Burger

// This hambuger menu doesn't work due to the Nav-index.js having 2 function and if/else statement. Failed to incorporate functional hamburger method MISERABLY