import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDpYstoHeWdK_6gDkTInSZFvrjQdYx_avg",
  authDomain: "studentmanager-669de.firebaseapp.com",
  projectId: "studentmanager-669de",
  storageBucket: "studentmanager-669de.appspot.com",
  messagingSenderId: "684688848577",
  appId: "1:684688848577:web:59bb6b6b0034499ee08640",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export async function signInWithGoogle(){
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    return await signInWithPopup(auth,provider);
}