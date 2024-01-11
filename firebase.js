import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getStorage,
  ref, uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
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

export const getStorageTest = getStorage;

export async function signInWithGoogle(){
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    return await signInWithPopup(auth,provider);
}
export async function uploadFileToFireBaseStorage(file){
  let fileName = `${Math.ceil(Date.now() * Math.random())}.${
    file.type.split("/")[1]
  }`; 
  const storage  = getStorage(app);
  const storageRef = ref(storage, fileName);

  return await uploadBytes(storageRef, file).then( async (res)=>{
    return await getDownloadURL(res.ref);
  })
  .catch(err =>{
    return false;
  })
}