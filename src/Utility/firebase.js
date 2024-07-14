
import firebase  from "firebase/compat/app";
// auth
import {getAuth} from 'firebase/auth';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEdhj7l2DE7cwGPitt-PP-EHY8baZ_YyA",
  authDomain: "clone-670e0.firebaseapp.com",
  projectId: "clone-670e0",
  storageBucket: "clone-670e0.appspot.com",
  messagingSenderId: "982178543233",
  appId: "1:982178543233:web:0e1fdb5f56e151ed703f80"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db =app.firestore();