import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBIrGJ4e1PnQCbVW9eUqh3oypT-FpAGvw",
  authDomain: "ladonagatona.firebaseapp.com",
  projectId: "ladonagatona",
  storageBucket: "ladonagatona.appspot.com",
  messagingSenderId: "347328360143",
  appId: "1:347328360143:web:254ffeba300b8618eb51ba"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)

