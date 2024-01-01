// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmcPErLbyXbG6BJoNlTBprerXVLonWybA",
  authDomain: "e-ecommerce-9192e.firebaseapp.com",
  projectId: "e-ecommerce-9192e",
  storageBucket: "e-ecommerce-9192e.appspot.com",
  messagingSenderId: "29282593554",
  appId: "1:29282593554:web:70763a4545556c2bace1cb"
};
const firebaseConfig2 = {
  apiKey: "AIzaSyCIgrTj8I9b7FPfsd4MxiuKxnBmdultPTU",
  authDomain: "e-commerce-admin-11ad9.firebaseapp.com",
  projectId: "e-commerce-admin-11ad9",
  storageBucket: "e-commerce-admin-11ad9.appspot.com",
  messagingSenderId: "939257351099",
  appId: "1:939257351099:web:877326542848382d76d29e"
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig,"my-first-firebase-app ");
const app2 = firebase.initializeApp(firebaseConfig2,"my-second-firebase-app ");

export const user=app.auth()
export const Admin=app2.auth()
