import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "bicileteria.firebaseapp.com",
  projectId: "bicileteria",
  storageBucket: "bicileteria.appspot.com",
  messagingSenderId: "316956471672",
  appId: "1:316956471672:web:9f8339a29f8e4a4763188d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);