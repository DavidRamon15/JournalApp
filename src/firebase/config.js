// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth }  from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6f3ZI1BVlex5LQZdw0LEmR_MG7JpILiE",
  authDomain: "react-cursos-2e77c.firebaseapp.com",
  projectId: "react-cursos-2e77c",
  storageBucket: "react-cursos-2e77c.appspot.com",
  messagingSenderId: "427316235191",
  appId: "1:427316235191:web:83b64e5569148035abb632"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);