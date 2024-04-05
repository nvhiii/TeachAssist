// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "teachassistnahi.firebaseapp.com",
  projectId: "teachassistnahi",
  storageBucket: "teachassistnahi.appspot.com",
  messagingSenderId: "297848945283",
  appId: "1:297848945283:web:f13725d776a1ad84c2f9b6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
