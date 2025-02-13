// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeDBs-mCrGemFPmEjzRJ8hvTjkIBVjcGw",
  authDomain: "shopwise-bda39.firebaseapp.com",
  projectId: "shopwise-bda39",
  storageBucket: "shopwise-bda39.firebasestorage.app",
  messagingSenderId: "1095526415426",
  appId: "1:1095526415426:web:99529cbfc0ae79fde981db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;