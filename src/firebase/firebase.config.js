// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmQZqZ8IVdZZzZPj8ag3XclIfmPQkB6HU",
  authDomain: "local-tours-and-guide.firebaseapp.com",
  projectId: "local-tours-and-guide",
  storageBucket: "local-tours-and-guide.appspot.com",
  messagingSenderId: "969692251482",
  appId: "1:969692251482:web:1fe30e866a6623285a1f63",
  measurementId: "G-M2D68JW3BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;