import React, { useState } from "react";
import Orders from "../components/Orders"
import { useQuery } from '@apollo/client';
import { QUERY_ALL_USERS, QUERY_USER } from '../utils/queries';
import { useMutation } from "@apollo/client";
import { ADD_PRODUCT } from "../utils/mutations";


function OrderManagement(props) {
    const { data } = useQuery(QUERY_USER);
    const { thing } = useQuery(QUERY_ALL_USERS)
    let people;
    let user;
    let role;
    let manager = false;
    let admin = false;
    const [formState, setFormState] = useState({ name: '', description: '', price: 0, category: '', image: '' });
    const [product, { error }] = useMutation(ADD_PRODUCT);


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(thing)
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
    if(thing) {
        people = thing.users;
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
                        placeholder='Cateogry of Product Here'
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

            {admin ? (<div className = 'mt-[3rem]'><p>wow you are an admin!</p>

            <label for="user-names">Choose a user: </label>
<select name="user-names" id="user-names">
    <option value="rigatoni">Rigatoni</option>
  <option value="dave">Dave</option>
  <option value="pumpernickel">Pumpernickel</option>
  <option value="reeses">Reeses</option>
</select>
            </div>
            ) : null}

        </>
    )
}

export default OrderManagement;