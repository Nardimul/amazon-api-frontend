import firebase from "firebase/compat/app";
// We have to add additional functionalities to services on the firebase
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpzSADRZRo2suDc2BTIlTAndMVFJtB7jE",
  authDomain: "clone-c27be.firebaseapp.com",
  projectId: "clone-c27be",
  storageBucket: "clone-c27be.appspot.com",
  messagingSenderId: "152258396185",
  appId: "1:152258396185:web:a4451ef219e515e03dea88"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// It will store every services related to authentication is stored on auth variale
export const auth = getAuth(app)
export const db =app.firestore()