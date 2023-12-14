import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDFVQ9sP45OnpeOpyy1OuoGeRbwb6P2llQ",
  authDomain: "app-restaurant-41923.firebaseapp.com",
  projectId: "app-restaurant-41923",
  storageBucket: "app-restaurant-41923.appspot.com",
  messagingSenderId: "975135739666",
  appId: "1:975135739666:web:c24ad44703001d70a92dcb"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)