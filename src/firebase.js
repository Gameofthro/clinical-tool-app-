import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYvsZoxMO7Sr--WhZvuxz-lt4brKHIzFE",
  // CRITICAL: Ensure this matches your Vercel URL in production
  authDomain: "clinical-tool.firebaseapp.com", 
  projectId: "clinical-tool",
  storageBucket: "clinical-tool.firebasestorage.app",
  messagingSenderId: "907026280854",
  appId: "1:907026280854:web:51798c009479506b54edb7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithRedirect, getRedirectResult, signOut };