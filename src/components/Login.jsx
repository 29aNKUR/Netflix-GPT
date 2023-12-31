import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/Constants";


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    const email1 = email?.current?.value;
    const password1 = password?.current?.value;
    const name1 = name?.current?.value;

    const message = checkValidData(email1, password1);
    setErrMsg(message);

    // if Error message then return
    if (message) return;

    // if no error messages and user is not Signed Up
    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email1, password1)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //updating user profile
          updateProfile(user, {
            displayName: name1,
            photoURL:USER_AVATAR 
             ,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoUrl: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrMsg(error.message);
            });
          // console.log(user, "user");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email1, password1)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "-" + errorMessage);
        });
    }

    // console.log(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen w-screen object-cover"
          src={BG_IMG}
          alt="background image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-8 w-full md:w-3/12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold py-2">{errMsg}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={() => toggle()}>
          {isSignIn
            ? "New to Netflix? Sign Up now"
            : "Already Registered! Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
