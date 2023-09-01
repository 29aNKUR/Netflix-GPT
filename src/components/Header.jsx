import React from "react";
import { useState,useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/Constants";

// import appStore from "../utils/appStore";



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profileArrow, setProfileArrow] = useState(false);
  // console.log(profileArrow);


  const user = useSelector(state=>state.user);
  // console.log("user", user);  

  const toggle = () => {
    setProfileArrow(!profileArrow);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };


  useEffect(() => {
    //This will be called whenever user signs in signs out
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        //Signup
      if (user) {
        const {uid,email,displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoUrl: photoURL}));
        navigate("/browse")
      } else {
        //Signout
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);


  return (
    <div>
      <div className="absolute w-screen bg-gradient-to-b from-black px-2 py-2 z-10 flex justify-between">
        <img
          className="w-32"
          src={NETFLIX_LOGO}
          alt="netflix logo"
        />
        {user &&        <div className="flex p-2">
          <img
            className="w-10 h-10 rounded-lg"
            src={user?.photoUrl}
            alt="user logo"
          />
          <div className="p-2">
            <h1
              className="text-white font-extrabold text-lg cursor-pointer"
              onClick={() => toggle()}
            >
              ▽
            </h1>
            {profileArrow && (
              <button className= "text-white font-bold flex justify-end" onClick = {()=>handleSignOut()}>
                Sign out
              </button>
            )}
          </div>
        </div>}
 
      </div>
    </div>
  );
};

export default Header;
