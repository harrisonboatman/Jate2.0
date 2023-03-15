
import React from "react";
import Michael from "../assets/michael.png"
// import { faBrands } from "@fortawesome/fontawesome-svg-core"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


function Footer() {
    return (
        <div className="container mx-auto mb-6">
            <div className="wrapper">
                <div className=" grid grid-flow-row grid-cols-5  gap-8">
                    <div className="max-w-sx bg-gray-700 rounded-2xl ">
                    <div className="top-color bg-gray-300 h-20 border-none rounded-t-2xl"></div>
                        <div className="flex flex-col items-center pb-20">
                            <img src={Michael} className="w-24 mb-3 rounded-full mt-[-48px] ring-[5px] ring-gray-300" />
                            <h1 className="mb-2 text-2xl font-medium text-gray-50">Michael Smith</h1>
                            <span className="text-sm text-gray-500">Full Stack</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <div className="inline-flex items-center text-sm font-medium text-center">
                                <FaGithub className="text-white mx-5" size={30}/>
                                <FaLinkedin className="text-white mx-5" size={30}/>
                                <AiOutlineMail className="text-white mx-5" size={30}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sx bg-gray-700 rounded-2xl ">
                    <div className="top-color bg-gray-300 h-20 border-none rounded-t-2xl"></div>
                        <div className="flex flex-col items-center pb-20">
                            <img src={Michael} className="w-24 mb-3 rounded-full mt-[-48px] ring-[5px] ring-gray-300" />
                            <h1 className="mb-2 text-2xl font-medium text-gray-50">Michael Smith</h1>
                            <span className="text-sm text-gray-500">Full Stack</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <div className="inline-flex items-center text-sm font-medium text-center">
                                <FaGithub className="text-white mx-5" size={30}/>
                                <FaLinkedin className="text-white mx-5" size={30}/>
                                <AiOutlineMail className="text-white mx-5" size={30}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sx bg-gray-700 rounded-2xl ">
                    <div className="top-color bg-gray-300 h-20 border-none rounded-t-2xl"></div>
                        <div className="flex flex-col items-center pb-20">
                            <img src={Michael} className="w-24 mb-3 rounded-full mt-[-48px] ring-[5px] ring-gray-300" />
                            <h1 className="mb-2 text-2xl font-medium text-gray-50">Michael Smith</h1>
                            <span className="text-sm text-gray-500">Full Stack</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <div className="inline-flex items-center text-sm font-medium text-center">
                                <FaGithub className="text-white mx-5" size={30}/>
                                <FaLinkedin className="text-white mx-5" size={30}/>
                                <AiOutlineMail className="text-white mx-5" size={30}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sx bg-gray-700 rounded-2xl ">
                    <div className="top-color bg-gray-300 h-20 border-none rounded-t-2xl"></div>
                        <div className="flex flex-col items-center pb-20">
                            <img src={Michael} className="w-24 mb-3 rounded-full mt-[-48px] ring-[5px] ring-gray-300" />
                            <h1 className="mb-2 text-2xl font-medium text-gray-50">Michael Smith</h1>
                            <span className="text-sm text-gray-500">Full Stack</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <div className="inline-flex items-center text-sm font-medium text-center">
                                <FaGithub className="text-white mx-5" size={30}/>
                                <FaLinkedin className="text-white mx-5" size={30}/>
                                <AiOutlineMail className="text-white mx-5" size={30}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sx bg-gray-700 rounded-2xl ">
                    <div className="top-color bg-gray-300 h-20 border-none rounded-t-2xl"></div>
                        <div className="flex flex-col items-center pb-20">
                            <img src={Michael} className="w-24 mb-3 rounded-full mt-[-48px] ring-[5px] ring-gray-300" />
                            <h1 className="mb-2 text-2xl font-medium text-gray-50">Michael Smith</h1>
                            <span className="text-sm text-gray-500">Full Stack</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <div className="inline-flex items-center text-sm font-medium text-center">
                                <FaGithub className="text-white mx-5" size={30}/>
                                <FaLinkedin className="text-white mx-5" size={30}/>
                                <AiOutlineMail className="text-white mx-5" size={30}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                </div>
            </div>
        </div>
    )
}

export default Footer;