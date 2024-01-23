// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRIXhVAWVjsWhP2XCAKn3cop6ay9QgUl0",
  authDomain: "ecommerce-19283.firebaseapp.com",
  projectId: "ecommerce-19283",
  storageBucket: "ecommerce-19283.appspot.com",
  messagingSenderId: "551995578870",
  appId: "1:551995578870:web:b020d46ac3cf9a4bfd8fd7",
  measurementId: "G-2KGJK0QM31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {analytics}