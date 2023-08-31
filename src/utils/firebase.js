// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5A-4lG17iQOoJhI8wabI5fMMkyDZkox8",
  authDomain: "netflix-gpt-29-ank.firebaseapp.com",
  projectId: "netflix-gpt-29-ank",
  storageBucket: "netflix-gpt-29-ank.appspot.com",
  messagingSenderId: "11131452819",
  appId: "1:11131452819:web:4e920d3830e2fe8e837c66",
  measurementId: "G-48GGZK5XWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();