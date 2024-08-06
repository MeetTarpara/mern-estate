// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API  ,
  authDomain: "real-estate-f000e.firebaseapp.com",
  projectId: "real-estate-f000e",
  storageBucket: "real-estate-f000e.appspot.com",
  messagingSenderId: "998708633323",
  appId: "1:998708633323:web:8d4a5cc6facd43e1b0a8ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);