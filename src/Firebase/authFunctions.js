import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const createUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw new error(error.message);
  }
};

export const signOutUser = async () => {
  return signOut(auth);
};
