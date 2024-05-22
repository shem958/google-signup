// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-6bFwqcWAC_u3U-6JOLTvrIJO9At3-6E",
  authDomain: "signupapp-c799d.firebaseapp.com",
  projectId: "signupapp-c799d",
  storageBucket: "signupapp-c799d.appspot.com",
  messagingSenderId: "155045051206",
  appId: "1:155045051206:web:652385eb4f86c2b2e6c347",
  measurementId: "G-5ZCFKR9X96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
