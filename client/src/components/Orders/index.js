import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ProductItem from '../ProductItem';
import spinner from '../../assets/spinner.gif';
import image1 from '../../assets/connor.png'
import darren from '../../assets/darren.png'
function Orders(item){
    const { image, name, _id} = item;


      {/* <Link to={`/products/${_id}`}>
                                <img
                  class=" rounded-lg object-cover ease-in duration-300 hover:scale-105 h-full"
                  src={image1}
                />
                                </Link> */}

    return(
        <>
           <h1 className="mt-20 text-4xl font-extrabold text-center">Order Management Page</h1>
            <div className="mx-1 flex flex-wrap justify-center">
{/* -------------------------- Submitted Orders ---------------------------------------------------------------*/}

                <div>  
                    <h2 className="justify-center mt-20 text-2xl font-extrabold text-center flex">Submitted</h2>
                    <div>
                       
                        <div class="min-h-fit p-10 md:w-3/4 flex justify-center items-center scale-75 hover:scale-80 hover:ease-in-out " >
                            <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
                               
                                <div class="flex flex-col items-center">
                                    <div>
                                        <img src={darren} />
                                        <h1 class="mt-5 text-2xl font-semibold">Status: Submitted</h1>
                                        <p>Order: Bacon and Egg Taco & Migas & Mojito </p>
                                        <p></p>
                                    </div>
                                    <div className='pt-5'>
                                        <button class="text-white text-md font-semibold bg-yellow-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
                                            Move to In Progress
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
                    <h2 className="justify-center mt-20 text-2xl font-extrabold text-center flex">In Progress</h2>
                    <div>
                       
                        <div class="min-h-fit p-10 md:w-3/4 flex justify-center items-center scale-75 hover:scale-80 hover:ease-in-out " >
                            <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
                               
                                <div class="flex flex-col items-center">
                                    <div>
                                    <img src={darren} />
                                        <h1 class="mt-5 text-2xl font-semibold">Status: Submitted</h1>
                                        <p>Order: Bacon and Egg Taco & Migas & Mojito </p>
                                        <p></p>
                                    </div>
                                    <div className='pt-5'>
                                        <button class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
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
                    <h2 className="justify-center mt-20 text-2xl font-extrabold text-center flex">Completed</h2>
                    <div>
                       
                        <div class="min-h-fit p-10 md:w-3/4 flex justify-center items-center scale-75 hover:scale-80 hover:ease-in-out " >
                            <div class="container mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
                               
                                <div class="flex flex-col items-center">
                                    <div>
                                    <img src={darren} />
                                        <h1 class="mt-5 text-2xl font-semibold">Status: Submitted</h1>
                                        <p>Order: Bacon and Egg Taco & Migas & Mojito </p>
                                        <p></p>
                                    </div>
                                    <div className='pt-5'>
                                        <button class="text-white text-md font-semibold bg-red-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
                                            Move to In Progress
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