// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMqpBH_7pOqinggPQ7CqUrjEZVhmTfZ3U",
  authDomain: "internarea-1c86d.firebaseapp.com",
  projectId: "internarea-1c86d",
  storageBucket: "internarea-1c86d.appspot.com",
  messagingSenderId: "573950018739",
  appId: "1:573950018739:web:db00ff03b0eb37eb215cc6",
  measurementId: "G-LJ9NTL1X6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};