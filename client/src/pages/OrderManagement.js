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
            {manager ? (<div>
                <p>yous a manager</p>
                <p>You can add a product to the website below!</p>
                <form onSubmit={handleFormSubmit}>
                    <input id='name'
                        name='name'
                        type='text'
                        placeholder='Name of Product Here'
                        onChange={handleChange}>

                    </input>
                    <input id='description'
                        name='description'
                        type='text'
                        placeholder='Description of Product Here'
                        onChange={handleChange}>

                    </input>
                    <input id='price'
                        name='price'
                        placeholder='Price of Product Here'
                        onChange={handleChange}>

                    </input>
                    <input id='category'
                        name='category'
                        type='text'
                        placeholder='Cateogry of Product Here'
                        onChange={handleChange}>

                    </input>
                    <input id='image'
                        name='image'
                        type='file'
                        accept="image/*"
                        placeholder='Category of Product Here'
                        onChange={handleChange}>

                    </input>
                    <div className="flex items-center justify-center">
                        <button
                            className="w-[200px] rounded-3xl bg-[#5a0c1d] hover:bg-[#a21634] text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Add product!
                        </button>
                    </div>
                </form>

            </div>) : null}

            {admin ? (<div className='mt-[3rem]'><p>wow you are an admin!</p>

                <form onSubmit={handleJobChange}>
                    <label for="user-names">Choose a user to change job of: </label>
                    <select name="_id" id="_id">
                        {people.users.map((person) => (
                            <option value={person._id}>{person.firstName} {person._id}</option>
                        ))}
                        
                    </select>
                    <label>Choose which job you would like them to be now:</label>
                    <select name='userType' id='userType'>
                        <option value='employee'>Employee</option>
                        <option value='manager'>Manager</option>
                        <option value='admin'>Admin</option>
                        <option value ='customer'>Customer</option>
                    </select>
                    <button
                        className="w-[200px] rounded-3xl bg-[#5a0c1d] hover:bg-[#a21634] text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Change employee job!
                    </button>
                </form>
            </div>
            ) : null}

        </>
    )
}

export default OrderManagement;