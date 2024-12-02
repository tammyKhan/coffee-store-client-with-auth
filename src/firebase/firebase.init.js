// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA052fM8Z02cr_9sSWR9RxPNpvNVcH4Q6Y",
  authDomain: "coffee-store-13f96.firebaseapp.com",
  projectId: "coffee-store-13f96",
  storageBucket: "coffee-store-13f96.firebasestorage.app",
  messagingSenderId: "126582304217",
  appId: "1:126582304217:web:94ab6362b328975da63dc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)