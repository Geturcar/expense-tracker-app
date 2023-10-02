// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzPSH7dbtj_3MKIghvWjayCb20f8tBA3Q",
  authDomain: "expense-tracker-e0365.firebaseapp.com",
  projectId: "expense-tracker-e0365",
  storageBucket: "expense-tracker-e0365.appspot.com",
  messagingSenderId: "183204023591",
  appId: "1:183204023591:web:2af0e537f296862c1fad02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)