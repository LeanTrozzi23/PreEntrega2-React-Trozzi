import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB4cDSiEG7g8e_EsspwAjWnMiwj7cK9c7c",
  authDomain: "ecommerce-trozzi.firebaseapp.com",
  projectId: "ecommerce-trozzi",
  storageBucket: "ecommerce-trozzi.firebasestorage.app",
  messagingSenderId: "886570883454",
  appId: "1:886570883454:web:c7365f6141148bb2193b2f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
