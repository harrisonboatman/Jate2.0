import React, { useState } from "react";
import Orders from "../components/Orders"
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS, QUERY_USER } from '../utils/queries';
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT, UPDATE_USER } from "../utils/mutations";


function OrderManagement(props) {
    const { data } = useQuery(QUERY_USER);
    const thing = useQuery(QUERY_ALL_USERS)
    let people;
    let user;
    let role;
    let manager = false;
    let admin = false;
    const [formState, setFormState] = useState({ name: '', description: '', price: 0, category: '', image: '', _id: '', userType: '' });
    const [product, { error }] = useMutation(ADD_PRODUCT);
    const [job] = useMutation(UPDATE_USER)


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        let productPrice = document.querySelector('#price').value
        productPrice = JSON.parse(productPrice);
        console.log(productPrice)


        try {
            const mutationResponse = await product({
                variables: { name: formState.name, description: formState.description, price: productPrice, category: formState.category, image: formState.image },
            });
            console.log(mutationResponse);
            console.log('hello')

        } catch (e) {
            console.log(e);
        }
    };
    const handleJobChange = async (event) => {
        event.preventDefault();
        let _id = document.querySelector('#_id').value
        console.log(_id)
        let userJob = document.querySelector('#userType').value
        console.log(userJob)

        try {
            const mutationResponse = await job({
                variables: { id: _id, userType: userJob },
            });
            console.log(mutationResponse);
            console.log('hello')

        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    if (data) {
        user = data.user;
        role = data.user.userType;

    }
    if (thing) {
        people = thing.data;
    }
    if (role === 'manager') {
        manager = true
    } else if (role === 'admin') {
        admin = true
    } else {
        manager = false;
        admin = false;
    }

    return (
        <>
            <p>welcome to the page</p>

            {user ? (<p>welcome {user.firstName} who is a {role}</p>) : null}
            {manager ? (<div class="mt-5">
                <p class="text-center">yous a manager</p>
                <p class="text-center">You can add a product to the website below!</p>
                <div class="flex justify-center">
                    <form onSubmit={handleFormSubmit}
                        class="p-10 bg-gray-900 rounded-xl">
                        <div class="mb-6">
                            <label for="product-name" class="block mb-2 text-sm font-medium text-green-500">Product Name</label>
                            <input id='name'
                                name='name'
                                type='text'
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder='Name of Product Here'
                                onChange={handleChange}>
                            </input>
                        </div>
                        <div class="mb-6">
                            <label for="product-name" class="block mb-2 text-sm font-medium text-green-500">Product Description</label>
                            <input id='description'
                                name='description'
                                type='text'
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder='Description of Product Here'
                                onChange={handleChange}>
                            </input>
                        </div>
                        <div class="mb-6">
                            <label for="product-description" class="block mb-2 text-sm font-medium text-green-500">Product Description</label>
                            <input id='price'
                                name='price'
                                type='text'
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder='Price of Product Here'
                                onChange={handleChange}>
                            </input>
                        </div>
                        <div class="mb-6">
                            <label for="product-category" class="block mb-2 text-sm font-medium text-green-500">Product Category</label>
                            <input id='category'
                                name='category'
                                type='text'
                                class="shadow-sm bg-gray-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder='Category of Product Here'
                                onChange={handleChange}>
                            </input>
                        </div>
                        <input id='image'
                            name='image'
                            type='file'
                            accept="image/*"
                            placeholder='Category of Product Here'
                            class="text-white"
                            onChange={handleChange}>

                        </input>
                        <div className="flex items-center justify-center mt-4">
                            <button
                                className="w-[200px] rounded-3xl bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Add product!
                            </button>
                        </div>
                    </form>
                </div>

            </div>) : null}

            {admin ? (

                <div className='mt-[3rem] mx-4 flex justify-center '>
                    <div class="bg-gray-900 rounded-xl p-10">
                    <h2 class="text-green-500 my-5 text-center font-extrabold">wow you are an admin!</h2>
<form onSubmit={handleJobChange}>
                    <label class="text-green-500" for="_id">Choose a user: </label>
                    <select name="_id" id="_id">
                    {people.users.map((person) => (
                            <option value={person._id}>Name: {person.firstName} ID: {person._id}</option>
                        ))}                       
                    </select>
                    <label class = 'text-green-500'>Choose which job you would like them to be now:</label>
                    <select name='userType' id='userType'>
                        <option value='employee'>Employee</option>
                        <option value='manager'>Manager</option>
                        <option value='admin'>Admin</option>
                        <option value ='customer'>Customer</option>
                    </select>
                    <button
                        className="w-[200px] rounded-3xl bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Change employee job!
                    </button>
                    </form>
                    </div>
                </div>
            ) : null}

        </>
    )
}

export default OrderManagement;