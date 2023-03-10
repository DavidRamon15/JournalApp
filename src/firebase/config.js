// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth }  from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID
} = getEnvironments();


 // PRODUCCION
 /*const firebaseConfig = {
  apiKey: "AIzaSyD6f3ZI1BVlex5LQZdw0LEmR_MG7JpILiE",
  authDomain: "react-cursos-2e77c.firebaseapp.com",
  projectId: "react-cursos-2e77c",
  storageBucket: "react-cursos-2e77c.appspot.com",
  messagingSenderId: "427316235191",
  appId: "1:427316235191:web:83b64e5569148035abb632"
};
*/
//Testing 
/*
const firebaseConfig = {
  apiKey: "AIzaSyB4fLglRg4Geuz1XZt9LewfbIUUjBEuBS4",
  authDomain: "react-cursos-pruebas-f7768.firebaseapp.com",
  projectId: "react-cursos-pruebas-f7768",
  storageBucket: "react-cursos-pruebas-f7768.appspot.com",
  messagingSenderId: "340739574834",
  appId: "1:340739574834:web:c2ba73293fd0465eab002b",
  measurementId: "G-FQNFHZXVV4"
};
*/

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId:VITE_MEASUREMENTID
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);