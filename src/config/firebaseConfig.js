// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWTjds315yWnG7fTNwpqyNJuzTSLl1p0k",
  authDomain: "ptac-login-4027f.firebaseapp.com",
  projectId: "ptac-login-4027f",
  storageBucket: "ptac-login-4027f.firebasestorage.app",
  messagingSenderId: "183642926600",
  appId: "1:183642926600:web:d119ed3a2b1bc7eec4ebbd",
  measurementId: "G-L3Q8N1LJTG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }; 