// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-S9o8Sh74U_ik-F_osJeUmjIhg2RT8i0",
  authDomain: "te-lo-volvere-a-contar.firebaseapp.com",
  projectId: "te-lo-volvere-a-contar",
  storageBucket: "te-lo-volvere-a-contar.appspot.com",
  messagingSenderId: "287343133874",
  appId: "1:287343133874:web:617a2f2f4ee7187086b5ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };