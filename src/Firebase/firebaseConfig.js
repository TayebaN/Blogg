import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXPZbqGfcU36LPvPOsdSmxfLaM89BmzqE",
  authDomain: "my-blogg-e74e1.firebaseapp.com",
  projectId: "my-blogg-e74e1",
  storageBucket: "my-blogg-e74e1.appspot.com",
  messagingSenderId: "492607476184",
  appId: "1:492607476184:web:be48dceaee0c4d96a1a2ad",
  measurementId: "G-1YR9VW532V",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
