// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApLevkY3IfrEudeFpUjVAGNEr3LOOAuZQ",
  authDomain: "nasi-4df60.firebaseapp.com",
  projectId: "nasi-4df60",
  storageBucket: "nasi-4df60.appspot.com",
  messagingSenderId: "76994591126",
  appId: "1:76994591126:web:8cb6bca7367ccad87645b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}