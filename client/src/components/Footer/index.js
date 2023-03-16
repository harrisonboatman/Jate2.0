import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        
<footer class="footer bottom-0 left-0 w-full p-4 bg-green-600 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
    <span class="text-sm text-white sm:text-center ">© 2023 <a href="https://flowbite.com/" class="hover:underline">JATE™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-normal text-white  sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="https://peasepark.org/" class="mr-4 hover:underline md:mr-6">Local Activites</a>
        </li>
        <li>
            <button href="#" class="tooltip mr-4 md:mr-6 text-gray-300 cursor-not-allowed">Careers
            <span class="tooltiptext">Unfortunately we currently aren't hiring :/</span></button>
        </li>
        <li>
        <Link to ="/contact"class="mr-4 hover:underline md:mr-6">Contact</Link>
        </li>
    </ul>
</footer>   

    )
}

export default Footer;