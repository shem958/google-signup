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

/* 
initializeApp: This function initializes a Firebase application using the configuration provided.
getAuth: This function initializes and returns the authentication service from Firebase.
GoogleAuthProvider: This is a class provided by Firebase Authentication to enable Google Sign-In for users.
Firebase configuration object: 
apiKey: A unique identifier for your Firebase project, used for API requests.
authDomain: The domain where your Firebase Authentication will be hosted.
projectId: The unique identifier for your Firebase project.
storageBucket: The storage location for your Firebase project's files.
messagingSenderId: The sender ID used for Firebase Cloud Messaging.
appId: The unique identifier for the app.
measurementId: An identifier for Google Analytics (optional). 
initializeApp(firebaseConfig): This initializes your Firebase app with the provided configuration object. The app variable holds the initialized app instance.
getAuth(app): Initializes the Firebase Authentication service with the app instance. The auth variable holds the authentication instance.
GoogleAuthProvider: Initializes a new Google Auth Provider instance, which will be used to handle Google sign-in.
export { auth, provider }: Exports the auth and provider instances so they can be imported and used in other parts of your application

*/
