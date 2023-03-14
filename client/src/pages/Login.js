import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
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

  return (

    <form onSubmit={handleFormSubmit}>
      <div className="background bg-gradient-to-br from-gray-200 to-gray-600">

        <div className="flex items-center justify-center h-[100vh] bg-">
          <div className=" lg:grid grid-cols-8 w-[80vw] shadow-2xl">
            <div className="col-span-5 bg-white border lg:h-[70vh] md:[60vh] ">
              <h1 className="text-3xl flex justify-center items-center py-20 text-green-700">
                Welcome Back friend!
              </h1>

              <h1 className="text-[2.5rem] text-green-700 font-extrabold text-center mb-10">Login to Your Account</h1>


              <div className="flex items-center justify-center">
                <div className="bg-white p-8 border-l-[10px] border-b-[10px] border-green-500 ">


                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-1 " for="username">

                    </label>
                    <input
                      className=" lg:w-[350px] md: w-[300px] sm:w-[260px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email"
                      onChange={handleChange}
                      required>
                    </input>
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700 font-bold mb-1 " for="password">

                    </label>
                    <input
                      className="lg:w-[350px] md: w-[300px] sm:w-[260px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="w-[200px] rounded-3xl bg-green-700 hover:bg-green-300 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline duration-150"
                      type="submit"
                    >
                      Login
                    </button>

                  </div>

                </div>
              </div>

            </div>
            <div className="login-side lg:col-span-3 bg-green-700 lg:visible">
              <h1 className=" flex justify-center items-center lg:text-6xl font-extrabold text-center text-white mt-[17vh] mb-14">
                First Time<br></br> Here?
              </h1>
              <p className="mx-12 flex justify-center items-center text-xl text-center text-white mb-24">
                Sign up and become a member today for discounts, updates, and plenty more!
              </p>

              <div className="flex items-center justify-center">
                <button
                  className="w-[200px] rounded-3xl text-green-600 hover:bg-green-900 hover:text-white hover:border-2 hover:border-white bg-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline duration-150"
                  type="submit"
                >
                  <Link to="/signup">
                  Sign Up</Link>
                </button>

              </div>

            </div>

          </div>
        </div>
      </div>

    </form>

  )
}

export default Login;
