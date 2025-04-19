// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCaHit-qe0ky0rxGaIQNiFXLAaSKMTbfjY",
  authDomain: "prepwise-e625c.firebaseapp.com",
  projectId: "prepwise-e625c",
  storageBucket: "prepwise-e625c.firebasestorage.app",
  messagingSenderId: "601472470948",
  appId: "1:601472470948:web:dd93dd6410c5c86eb57b31",
  measurementId: "G-T3CW1449HL"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);