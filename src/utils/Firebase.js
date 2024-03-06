// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJthbbJCKHei-Zk2tzFDxWyi3rN092mo4",
  authDomain: "gptnetflix-b1269.firebaseapp.com",
  projectId: "gptnetflix-b1269",
  storageBucket: "gptnetflix-b1269.appspot.com",
  messagingSenderId: "904839870814",
  appId: "1:904839870814:web:6d535f4f3a0b9257a337cf",
  measurementId: "G-0GQEV5T7HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();