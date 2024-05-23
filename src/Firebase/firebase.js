// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXPZbqGfcU36LPvPOsdSmxfLaM89BmzqE",
  authDomain: "my-blogg-e74e1.firebaseapp.com",
  projectId: "my-blogg-e74e1",
  storageBucket: "my-blogg-e74e1.appspot.com",
  messagingSenderId: "492607476184",
  appId: "1:492607476184:web:be48dceaee0c4d96a1a2ad",
  measurementId: "G-1YR9VW532V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
