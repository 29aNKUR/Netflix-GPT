import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggle = () => {
        setIsSignIn(!isSignIn);
    }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
      </div>
      <form className="p-8 w-3/12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-700"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input type="text" placeholder="Password" className="p-2 my-4 w-full bg-gray-700" />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={()=>toggle()} >{isSignIn ? "New to Netflix? Sign Up now": "Already Registered! Sign In now"}</p>
      </form>
    </div>
  );
};

export default Login;
