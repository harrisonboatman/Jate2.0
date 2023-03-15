
import React from "react";
import Michael from "../assets/michael.png"
import Harrison from "../assets/harrison.png"
import Darren from "../assets/darren.png"
import Connor from "../assets/connor.png"
import Rick from "../assets/Rick.png"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


function Footer() {
    return (
        <div className="mx-auto w-full">
            <div className="wrapper bg-white p-10 mb-6">
                <div className=" grid grid-flow-row grid-cols-5 gap-7 mx-6">
                    <div className="team-cards relative overflow-hidden">
                    <div className="max-w-sx bg-gradient-to-br from-black to-zinc-600 h-[300px]">
                    <div className="top-color bg-green-700 h-20 border-none rounded-t-2xl"></div>
                        <div className="flex flex-col items-center pb-20">
                            <img src={Darren} className="w-24 mb-5 rounded-full mt-[-48px] ring-[5px] ring-green-700" />
                            <h1 className="mb-2 text-2xl font-medium text-gray-50">Darren Medrano</h1>
                            <span className="text-lg text-gray-500 mb-2">Full Stack</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <div className="social inline-flex items-center text-sm font-medium text-center">
                                <FaGithub className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                <FaLinkedin className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                <AiOutlineMail className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-cards relative overflow-hidden">
                    <div className="max-w-sx bg-gradient-to-br from-black to-zinc-600 rounded-2xl  h-[300px]">
                    <div className="top-color bg-green-700 h-20 border-none rounded-t-2xl"></div>
                        <div className="flex flex-col items-center pb-20">
                            <img src={Harrison} className="w-24 mb-4 rounded-full mt-[-48px] ring-[5px] ring-green-700" />
                            <h1 className="mb-2 text-2xl font-medium text-gray-50">Harrison Boatman</h1>
                            <span className="text-lg text-gray-500 mb-2">Full Stack</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <div className="social inline-flex items-center text-sm font-medium text-center">
                                <FaGithub className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                <FaLinkedin className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                <AiOutlineMail className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-cards relative overflow-hidden">
                    <div className="max-w-sx bg-gradient-to-br from-black to-zinc-600 rounded-2xl  h-[300px]">
                    <div className="top-color bg-green-700 h-20 border-none rounded-t-2xl"></div>
                        <div className="flex flex-col items-center pb-20">
                            <img src={Connor} className="w-24 mb-2 rounded-full mt-[-48px] ring-[5px] ring-green-700" />
                            <h1 className="mb-2 text-2xl font-medium text-gray-50">Connor Bodin</h1>
                            <span className="text-lg text-gray-500 mb-2">Full Stack</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <div className="social inline-flex items-center text-sm font-medium text-center">
                                <FaGithub className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                <FaLinkedin className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                <AiOutlineMail className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-cards relative overflow-hidden">
                    <div className="max-w-sx bg-gradient-to-br from-black to-zinc-600 rounded-2xl h-[300px]">
                    <div className="top-color bg-green-700 h-20 border-none rounded-t-2xl"></div>
                        <div className="flex flex-col items-center pb-20">
                            <img src={Michael} className="w-24 mb-3 rounded-full mt-[-48px] ring-[5px] ring-green-700" />
                            <h1 className="mb-2 text-2xl font-medium text-gray-50">Michael Smith</h1>
                            <span className="text-lg text-gray-500 mb-2">Full Stack</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <div className="social inline-flex items-center text-sm font-medium text-center">
                                <FaGithub className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                <FaLinkedin className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                <AiOutlineMail className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="team-cards relative overflow-hidden">
                    <div className="max-w-sx bg-gradient-to-br from-black to-zinc-600 rounded-2xl h-[300px]">
                    <div className="top-color bg-green-700 h-20 border-none rounded-t-2xl"></div>
                        <div className="flex flex-col items-center pb-20">
                            <img src={Rick} className="w-24 mb-4 rounded-full mt-[-48px] ring-[5px] ring-green-700" />
                            <h1 className="mb-2 text-2xl font-medium text-gray-50">Rick Martinez</h1>
                            <span className="text-lg text-gray-500 mb-2">Full Stack</span>
                            <div className=" mt-4 space-x-3 md:mt-6">
                                <div className="social inline-flex items-center text-sm font-medium text-center">
                                <FaGithub className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                <FaLinkedin className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                <AiOutlineMail className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30}/>
                                </div>
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