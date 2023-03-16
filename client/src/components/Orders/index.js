import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ProductItem from '../ProductItem';
import spinner from '../../assets/spinner.gif';
import picture from '../../assets/about-us.png'

function Orders(item){
    const { image, name, _id} = item;


    return(
        <>
           <h1 className="mt-20 text-4xl font-extrabold text-center">Order Management Page</h1>
            <div className="mx-1 flex flex-wrap justify-between w-full">
{/* -------------------------- Submitted Orders ---------------------------------------------------------------*/}

                <div className='w-full'>  
                    <h2 className="justify-center mt-20 text-2xl font-extrabold text-center">Submitted</h2>
                    <div>
                        {/* This is where orders that are in progress will display */}
                        <div class="p-10 md:w-1/4 flex items-center hover:ease-in-out " >
                            <div class="container mx-auto p-9 bg-white w-full rounded-2xl  shadow-md hover:shadow-2xl transition duration-300">
                               
                                 <div className='text-2xl'>
                                    <img src={picture} />
                                 </div>
                                 
                                
                                <div class="flex justify-between items-center">
                                    <div>
                                        <h1 class="mt-5 text-2xl font-semibold">{name}</h1>
                                    </div>
                                    <div>
                                        <button class="text-white text-md font-semibold bg-yellow-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu mt-6 hover:scale-110 ">
                                            Move to in Progress
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
{/* -------------------------------------------------------------------------------------------------------------*/}
{/* -------------------------- In Progress Orders ---------------------------------------------------------------*/}

                <div className='w-full'>  
                    <h2 className="justify-center mt-20 text-2xl font-extrabold text-center">In Progress</h2>
                    <div>
                        {/* This is where orders that are in progress will display */}
                        <div class="p-10 md:w-1/4 flex items-center hover:ease-in-out " >
                            <div class="container mx-auto p-9 bg-white w-full rounded-2xl  shadow-md hover:shadow-2xl transition duration-300">
                                <Link to={`/products/${_id}`}>
                                    <img
                                        class="rounded-xl"
                                        src={`/assets/${image}`}
                                        alt={name}
                                    />
                                </Link>
                                <div class="flex justify-between items-center">
                                    <div>
                                        <h1 class="mt-5 text-2xl font-semibold">{name}</h1>
                                    </div>
                                    <div>
                                        <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
                                            Move to Completed
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/* ------------------------------------------------------------------------------------------------------------ */}
{/* -------------------------- Completed Orders -----------------------------------------------------------------*/}
                <div className='w-full'>
                    <h2 className="justify-center mt-20 text-2xl font-extrabold text-center">Completed</h2>
                    <div>
                        {/* This is where orders that are in progress will display */}
                        <div class="p-10 md:w-1/4 flex items-center hover:ease-in-out " >
                            <div class="container mx-auto p-9 bg-white w-full rounded-2xl  shadow-md hover:shadow-2xl transition duration-300">
                                <Link to={`/products/${_id}`}>
                                    <img
                                        class="rounded-xl"
                                        src={`/assets/${image}`}
                                        alt={name}
                                    />
                                </Link>
                                <div class="flex justify-between items-center">
                                    <div>
                                        <h1 class="mt-5 text-2xl font-semibold">{name}</h1>
                                    </div>
                                    <div>
                                        <button class="text-white text-md font-semibold bg-red-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
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

        </>
    )
}
export default Orders;