import React, { useState } from "react";
import Orders from "../components/Orders"
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../utils/mutations";


function OrderManagement(props) {
    const { data } = useQuery(QUERY_USER);
    let user;
    let role;
    let manager;
    const [formState, setFormState] = useState({ name: '', description: '', price: 0, category: '' });
    const [product, { error }] = useMutation(ADD_PRODUCT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        let productPrice = document.querySelector('#price').value
        productPrice = JSON.parse(productPrice);
        console.log(productPrice)

        try {
            const mutationResponse = await product({
                variables: { name: formState.name, description: formState.description, price: productPrice, category: formState.category  },
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
        role = data.user.userType

    }
    if (role === 'customer') {
        manager = false
    } else {
        manager = true
    }

    return (
        <>
            <p>welcome to the page</p>

            {user ? (<p>welcome {user.firstName} who is a {role}</p>) : null}
            {manager ? (<div>
                <p>yous a manager</p>
                <p>You can add a product to the website below!</p>
                <form onSubmit = {handleFormSubmit}>
                <input id = 'name'
                    name = 'name'
                    type = 'text'
                    placeholder = 'Name of Product Here'
                    onChange={handleChange}>
                        
                    </input> 
                    <input id = 'description'
                    name = 'description'
                    type = 'text'
                    placeholder = 'Description of Product Here'
                    onChange={handleChange}>
                        
                    </input>
                    <input id = 'price'
                    name = 'price'
                    placeholder = 'Price of Product Here'
                    onChange={handleChange}>
                        
                    </input>
                    <input id = 'category'
                    name = 'category'
                    type = 'text'
                    placeholder = 'Cateogry of Product Here'
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

        </>
    )
}

export default OrderManagement;