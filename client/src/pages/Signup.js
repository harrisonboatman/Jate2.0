import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
      <div className="background bg-gradient-to-br from-gray-600 to-gray-200">
        <div className="flex items-center justify-center h-[100vh]">
          <div className="lg:grid grid-cols-8 w-[80vw] shadow-2xl">
            <div className="login-side lg:col-span-3 bg-green-500 h-[65vh]">
              <h1 className=" flex justify-center items-center lg:text-6xl md:text-4xl sm:text-4xl font-extrabold text-center text-white mt-[12vh] lg:mb-20 md:mb-10 sm:mb-4">
                Joining<br></br> Jate?
              </h1>
              <p className="mx-12 flex justify-center items-center text-xl text-center text-white mb-24 md:mb-10">
                Please enter your details to sign up and be apart of our rapidly
                growing community!
              </p>
              <p className="mx-12 flex justify-center items-center text-xl text-center text-white mb-2 font-serif font-semibold">
                Already a member?
              </p>
              <div className="flex items-center justify-center">
                <button
                  className="w-[200px] rounded-3xl text-green-500 hover:bg-green-700 hover:text-white  bg-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline duration-150"
                  type="submit"
                >
                  <Link to="/login">
                  Sign in </Link>
                </button>
              </div>
            </div>
            <div className="col-span-5 bg-white lg:h-[65vh] md:h-[60vh] sm:h-[60vh]">
              <div className=" lg:h-[16vh] md:h-[16vh] sm:h-35vh]">
                <p className="lg:text-[2.8rem] md:text-[2.5rem] sm:text-[2.2rem] font-bold flex justify-center items-center h-full text-green-500 text-center font-serif underline">
                  Welcome to our Family
                </p>
              </div>

                      <div className="mb-4 flex mx-10 mt-2 justify-center">
                          <input
                              className=" lg:w-[220px] md:w-[180px] sm:w-[160px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mr-3"
                              id="firstName"
                              name="firstName"
                              type="text"
                              placeholder="First Name"
                              onChange={handleChange}
                              required>
                          </input>

                          <input
                              className=" flex lg:w-[300px] md:w-[230px] sm:w-[200px] border-2 border-gray-300 :p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ml-3"
                              id="lastName"
                              name="lastName"
                              type="text"
                              placeholder="Last Name"
                              onChange={handleChange}
                              required>
                          </input>
                      </div>

                      <div className="mb-4 flex justify-evenly mx-8 mt-10">
                          <input
                              className=" lg:w-[350px] md:-[300px] sm:w-[260px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mr-3"
                              id="email"
                              name="email"
                              type="text"
                              placeholder="Email Address"
                              onChange={handleChange}
                              required>
                          </input>
                      </div>

                      {/* <div className="mb-4 flex justify-evenly mx-8 mt-10">
                          <input
                              className=" w-[350px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mr-3"
                              id="signup-username"
                              name="signup-username"
                              type="text"
                              placeholder="Username"
                              onChange={handleChange}
                              required>
                          </input>
                      </div> */}

                      <div className="lg:mb-10 md:mb-9 sm:mb-9 flex justify-center mx-8 mt-10">
                          <input
                              className=" lg:w-[350px] md:-[300px] sm:w-[260px] border-2 border-gray-300 p-2 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mr-3"
                              id="password"
                              name="password"
                              type="password"
                              placeholder="Password"
                              onChange={handleChange}
                              required>
                          </input>
                      </div>

              <div className="flex items-center justify-center">
                <button
                  onSubmit={handleFormSubmit}
                  className="w-[200px] rounded-3xl text-white hover:bg-green-700 hover:text-white bg-green-500 font-bold py-2 px-4 focus:outline-none focus:shadow-outline duration-150"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
