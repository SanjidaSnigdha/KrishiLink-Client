// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
authDomain:importVITE_AUTHDOMAIN
VITE_PROJECTID
VITE_STORAGEBUCKET
VITE_MESSAGINGSENDERID
VITE_APPID
  projectId: import.meta.env.VITE_APIKEY
VITE_AUTHDOMAIN
VITE_PROJECTID
VITE_STORAGEBUCKET
VITE_MESSAGINGSENDERID
VITE_APPID import.meta.env
  messagingSenderId: import.meta.env.VITE_APIKEY
VITE_AUTHDOMAIN
VITE_PROJECTID
VITE_STORAGEBUCKET
VITE_MESSAGINGSENDERID
VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
