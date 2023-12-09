// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";







// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQXcK5t3t0IZqORANwFawVjnkIOgTSR4E",
  authDomain: "pm4-restaurant-app.firebaseapp.com",
  projectId: "pm4-restaurant-app",
  storageBucket: "pm4-restaurant-app.appspot.com",
  messagingSenderId: "587443215370",
  appId: "1:587443215370:web:e0700971de482fc8d0d3f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//servicios ocupados : Firestore

export const db = getFirestore(app) //recibe el firebase inicializado