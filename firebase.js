// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNq_jelkTpyWZ53asgKoW6I0w0VEATVJI",
  authDomain: "flashcardsaas-f73a3.firebaseapp.com",
  projectId: "flashcardsaas-f73a3",
  storageBucket: "flashcardsaas-f73a3.appspot.com",
  messagingSenderId: "165171127294",
  appId: "1:165171127294:web:b442ec45579223ccbd96af",
  measurementId: "G-WDTG80KG6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);