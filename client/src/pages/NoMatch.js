import React from "react";
import Jumbotron from "../components/Jumbotron";


const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1 className="text-white">404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Jumbotron>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-black  text-4xl">
        Sucks to suck
      </p>
    </div>
    </div>
  );
};

export default NoMatch;
