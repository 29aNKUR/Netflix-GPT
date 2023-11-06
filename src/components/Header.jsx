import React from "react";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

// import appStore from "../utils/appStore";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profileArrow, setProfileArrow] = useState(false);
  // console.log(profileArrow);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const user = useSelector((state) => state.user);
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
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoUrl: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //Signout
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div>
      <div className="absolute w-screen bg-gradient-to-b from-black px-2 py-2 z-10 justify-between flex flex-col md:flex-row">
        <Link to="/"><img className="w-44 mx-auto diplay:none md:display:block md:mx-0" src={NETFLIX_LOGO} alt="netflix logo" /></Link> 
        {user && (
          <div className="flex justify-between md:justify-normal p-4">
            
            {showGptSearch && (
              <select
                className="md:px-2 md:mx-2 bg-gray-900 text-white rounded-lg"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier}>{lang.name}</option>
                ))}
              </select>
            )}

          {/* <div className="flex justify-between"> */}
            {showGptSearch ? (
              <button
                className="rounded-lg mx-6 px-6 h-10 bg-purple-800 text-white"
                onClick={() => handleGptSearchClick()}
              >
                Homepage
              </button>
            ) : (
              <button
                className="rounded-lg mx-6 px-6 h-10 bg-purple-800 text-white"
                onClick={() => handleGptSearchClick()}
              >
                Gpt Search
              </button>
            )}
            {/* </div> */}
           
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
                <button
                  className="text-white font-bold flex justify-end"
                  onClick={() => handleSignOut()}
                >
                  Sign out
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
