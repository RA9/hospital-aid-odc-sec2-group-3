// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt9XtbY-sut66kQMcVeP3knC05QHvO4N0",
  authDomain: "hospital-aid.firebaseapp.com",
  projectId: "hospital-aid",
  storageBucket: "hospital-aid.appspot.com",
  messagingSenderId: "198119437465",
  appId: "1:198119437465:web:fda513113c59e0a5943408",
  measurementId: "G-TKT5WV9WRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebaseDb = getFirestore(app);