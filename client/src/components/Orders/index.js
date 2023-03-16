import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ProductItem from '../ProductItem';
import spinner from '../../assets/spinner.gif';
import image1 from '../../assets/connor.png'
import darren from '../../assets/darren.png'
import { BsFillSendCheckFill } from 'react-icons/bs'
import { BsHourglassSplit } from 'react-icons/bs'
import { IoMdCheckmarkCircle } from 'react-icons/io'

function Orders(item) {
    const { image, name, _id } = item;


    {/* <Link to={`/products/${_id}`}>
                                <img
                  class=" rounded-lg object-cover ease-in duration-300 hover:scale-105 h-full"
                  src={image1}
                />
                                </Link> */}

    return (
        <>
            <div className=' bg-zinc-800 h-full'>
                <h1 className="mt-16 pt-20 text-6xl font-extrabold text-center font-serif text-white">Order Management Page</h1>
                <div className="mx-1 flex flex-wrap justify-center">
                    {/* -------------------------- Submitted Orders ---------------------------------------------------------------*/}

                    <div>
                        <h2 className="justify-center mt-20 text-4xl text-white font-semibold text-center flex">Submitted &nbsp; <BsFillSendCheckFill size={43} className="text-yellow-500" /></h2>
                        <div>

                            <div class="min-h-fit pt-4 p-10 w-full flex justify-center items-center scale-75 hover:scale-80 hover:ease-in-out duration-300" >
                                <div class="container mx-auto p-9 bg-[#f9f9f3] max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

                                    <div class="flex flex-col items-center">
                                        <div>
                                            <img src={darren} />
                                            <h1 class="my-5 text-center text-3xl border-b-2 font-semibold">Status: Submitted</h1>
                                            <p className='text-lg'>Order: Bacon and Egg Taco & Migas & Mojito </p>

                                            {/* SUBMITTED SECTION ---- enter map functions in between <p> tags */}


                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>


                                        </div>
                                        <div className='pt-5'>
                                            <button class="text-white text-lg font-semibold bg-yellow-400 py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 hover:bg-yellow-500 ">
                                                Move to Completed
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* -------------------------------------------------------------------------------------------------------------*/}
                    {/* -------------------------- In Progress Orders ---------------------------------------------------------------*/}

                    <div>
                        <h2 className="justify-center mt-20 text-4xl text-white font-semibold text-center flex">In Progress&nbsp; <BsHourglassSplit size={43} className="text-green-500" /></h2>
                        <div>

                            <div class="min-h-fit pt-4 p-10 lg:w-full md:w-3/4 flex justify-center items-center scale-75 hover:scale-80 hover:ease-in-out duration-300" >
                                <div class="container mx-auto p-9 bg-[#f9f9f3] max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

                                    <div class="flex flex-col items-center">
                                        <div>
                                            <img src={darren} />
                                            <h1 class="my-5 text-center text-3xl border-b-2 font-semibold">Status: In Progress</h1>
                                            <p className='text-lg'>Order: Bacon and Egg Taco & Migas & Mojito </p>

                                            {/* PROGRESS SECTION ---- enter map functions in between <p> tags */}


                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>


                                        </div>
                                        <div className='pt-5'>
                                            <button class="text-white text-lg font-semibold bg-green-400 py-3 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 hover:bg-green-500">
                                                Move to In Progress
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ------------------------------------------------------------------------------------------------------------ */}
                    {/* -------------------------- Completed Orders -----------------------------------------------------------------*/}
                    <div>
                        <h2 className="justify-center mt-20 text-4xl text-white font-semibold text-center flex">Completed&nbsp; <IoMdCheckmarkCircle size={46} className="text-red-500" /></h2>
                        <div>

                            <div class="min-h-fit pt-4 p-10 lg:w-full md:w-3/4 flex justify-center items-center scale-75 hover:scale-80 hover:ease-in-out duration-300" >
                                <div class="container mx-auto p-9 bg-[#f9f9f3] max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

                                    <div class="flex flex-col items-center">
                                        <div>
                                            <img src={darren} />
                                            <h1 class="my-5 text-center text-3xl border-b-2 font-semibold">Status: Completed</h1>
                                            <p className='text-lg'>Order: Bacon and Egg Taco & Migas & Mojito </p>

                                            {/* COMPLETED SECTION ---- enter map functions in between <p> tags */}


                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>
                                            <p className='text-lg'></p>


                                        </div>
                                        <div className='pt-5'>
                                            <button class="text-white text-lg font-semibold bg-red-400 py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 hover:bg-red-500">
                                                Archive Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------------------------------------------------------------------------------------- */}
                </div>
            </div>

        </>
    )
}
export default Orders;