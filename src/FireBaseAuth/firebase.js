// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd6NqXH6UPbWXpccMrtiKpOJL_IOAVArY",
  authDomain: "finalproject-aba88.firebaseapp.com",
  projectId: "finalproject-aba88",
  storageBucket: "finalproject-aba88.appspot.com",
  messagingSenderId: "830101618768",
  appId: "1:830101618768:web:e18937d4a787cfa8381155",
  measurementId: "G-2R4SM0HL67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth, app, analytics}

