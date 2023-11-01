// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFb-qpV14fOcrpJLbQy7o9CCdO8zeNmZE",
  authDomain: "event-management-auth-c0658.firebaseapp.com",
  projectId: "event-management-auth-c0658",
  storageBucket: "event-management-auth-c0658.appspot.com",
  messagingSenderId: "616219162056",
  appId: "1:616219162056:web:f703125f85e0b116407cfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;