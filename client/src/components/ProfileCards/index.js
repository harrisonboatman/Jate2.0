import React, { createRef, useEffect, useRef, useState } from "react";
import Michael from "../../assets/michael.png"
import Harrison from "../../assets/harrison.png"
import Darren from "../../assets/darren.png"
import Connor from "../../assets/connor.png"
import Rick from "../../assets/Rick.png"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);





function ProfileCards () {
    
const [isCovered, setIsCovered] = useState(true)

function toggleCover() {
    setIsCovered(!isCovered);
}


    return (
        <div className="mx-auto w-full">
            <div className="sliding-div flex justify-center border-t-2 border-white">
                <div className="blanket text-white text-center lg:text-4xl md:text-3xl sm:text-xl: flex justify-center items-center">
                    <h1 className="flex justify-content align-middle tracking-wider">Enjoying the Content? Click&nbsp; <button onClick={toggleCover} className=" text-green-500 rounded-2xl hover:underline hover:text-green-600 " >Here</button>  &nbsp;to Meet the Webdevs<br></br>
                    
                   
                    </h1>
                </div>
                </div>
            
                <div className={`dev-group ${isCovered ? '' : 'remove'}`}>
            <div className="dev-group wrapper p-10 mt-4">
                <div className=" grid lg:grid-flow-row grid-cols-5 lg:gap-[4rem] lg:mx-16 md:mx-2">
                    <div className="team-cards z-0 relative overflow-hidden">
                        <div className="max-w-sx bg-gradient-to-br from-black to-zinc-600 h-[300px]">
                            <div className="top-color bg-green-700 h-20 border-none rounded-t-2xl"></div>
                            <div className="flex flex-col items-center pb-20">
                                <img src={Darren} className="w-24 mb-5 rounded-full mt-[-48px] ring-[5px] ring-green-700" />
                                <h1 className="mb-2 lg:text-2xl md:text-lg font-medium text-gray-50">Darren Medrano</h1>
                                <span className="text-lg text-gray-500 mb-2">Full Stack</span>
                                <div className="flex mt-4 space-x-3 md:mt-6">
                                    <div className="social inline-flex items-center text-sm font-medium text-center">

                                        <Link to="https://github.com/medranomiler">
                                            <FaGithub className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </Link>

                                        <Link to="https://www.linkedin.com/in/darrenmedrano/">
                                            <FaLinkedin className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </Link>

                                        <a href="mailto:medranomiler@gmail.com">
                                            <AiOutlineMail className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </a>
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

                                        <Link to="https://github.com/harrisonboatman">
                                            <FaGithub className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </Link>

                                        <Link to="https://www.linkedin.com/in/harrison-boatman-640795206/">
                                            <FaLinkedin className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </Link>

                                        <a href="mailto:hrry.boatman2@gmail.com">
                                            <AiOutlineMail className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </a>
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

                                        <Link to="https://github.com/connorbodin">
                                            <FaGithub className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </Link>

                                        <Link to="https://www.linkedin.com/in/connor-bodin-00/">
                                            <FaLinkedin className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </Link>

                                        <a href="mailto:connor.e.bodin@gmail.com ">
                                            <AiOutlineMail className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </a>
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

                                        <Link to="https://github.com/AustinBQ02">
                                            <FaGithub className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </Link>

                                        <Link to="https://www.linkedin.com/in/mdsmith02/">
                                            <FaLinkedin className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </Link>

                                        <a href="mailto:mdsmith02@gmail.com">
                                            <AiOutlineMail className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </a>
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

                                        <Link to="https://github.com/Rick3Mrtz">
                                            <FaGithub className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </Link>

                                        <Link to="http://www.linkedin.com/in/rickmrtz3">
                                            <FaLinkedin className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </Link>

                                        <a href="mailto:Rick.mrtz3@gmail.com">
                                            <AiOutlineMail className="text-white mx-5 hover:text-green-500 cursor-pointer duration-200" size={30} />
                                        </a>
                                    </div>
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

export default ProfileCards;