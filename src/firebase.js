import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect, // Add this
  getRedirectResult,  // Add this
  signOut 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYvsZoxMO7Sr--WhZvuxz-lt4brKHIzFE",
  authDomain: "clinical-tool-app-silk.vercel.app/",
  projectId: "clinical-tool",
  storageBucket: "clinical-tool.firebasestorage.app",
  messagingSenderId: "907026280854",
  appId: "1:907026280854:web:51798c009479506b54edb7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export the new functions
export { auth, googleProvider, signInWithPopup, signInWithRedirect, getRedirectResult, signOut };