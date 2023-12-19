import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBIrGJ4e1PnQCbVW9eUqh3oypT-FpAGvw",
  authDomain: "ladonagatona.firebaseapp.com",
  projectId: "ladonagatona",
  storageBucket: "ladonagatona.appspot.com",
  messagingSenderId: "347328360143",
  appId: "1:347328360143:web:96bb59c202dbde32eb51ba"
};


const app = initializeApp(firebaseConfig);

export const adopt = getFirestore(app)