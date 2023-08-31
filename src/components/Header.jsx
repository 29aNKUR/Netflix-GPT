import React from "react";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import appStore from "../utils/appStore";



const Header = () => {
  const navigate = useNavigate();
  const [profileArrow, setProfileArrow] = useState(false);
  // console.log(profileArrow);


  const user = useSelector(state=>state.user);
  console.log("user", user);  

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

  return (
    <div>
      <div className="absolute w-screen bg-gradient-to-b from-black px-2 py-2 z-10 flex justify-between">
        <img
          className="w-48"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix logo"
        />
        {user &&        <div className="flex p-2">
          <img
            className="w-12 h-12 rounded-lg"
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
