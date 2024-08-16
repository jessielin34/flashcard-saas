// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCl6qXRRQxk5Ag-lJzly-cdmjb2v6j5hQ",
  authDomain: "flashcard-saas-aca18.firebaseapp.com",
  projectId: "flashcard-saas-aca18",
  storageBucket: "flashcard-saas-aca18.appspot.com",
  messagingSenderId: "881074365288",
  appId: "1:881074365288:web:d8fedb434e40707bb92cdd",
  measurementId: "G-VKPN55ZB2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;