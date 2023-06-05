import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXvxRHDusYj8sEOsure_JoV-R7FrP1k6U",
  authDomain: "chat-f350a.firebaseapp.com",
  databaseURL: "https://chat-f350a-default-rtdb.firebaseio.com",
  projectId: "chat-f350a",
  storageBucket: "chat-f350a.appspot.com",
  messagingSenderId: "1066806378039",
  appId: "1:1066806378039:web:1bb227936a824dc6d989b2",
  measurementId: "G-6038CPMSQC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
//export const db = firebase.firestore();
