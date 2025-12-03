import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// 1. GO TO: https://console.firebase.google.com/
// 2. Create a project -> Click "Web" (</> icon) -> Copy config
// 3. Replace the keys below with YOUR keys from the console:

const firebaseConfig = {
  apiKey: "AIzaSyBYvsZoxMO7Sr--WhZvuxz-lt4brKHIzFE",
  authDomain: "clinical-tool.firebaseapp.com",
  projectId: "clinical-tool",
  storageBucket: "clinical-tool.firebasestorage.app",
  messagingSenderId: "907026280854",
  appId: "1:907026280854:web:51798c009479506b54edb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };