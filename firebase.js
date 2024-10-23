// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOEER8qxpKPDVrxkSe_29yiy7Mx6ubpS0",
  authDomain: "clonspotify-87560.firebaseapp.com",
  projectId: "clonspotify-87560",
  storageBucket: "clonspotify-87560.appspot.com",
  messagingSenderId: "274270342931",
  appId: "1:274270342931:web:d7fb1d7e538ef428c814e6",
  measurementId: "G-HTYDS58ZC6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const storage = getStorage(app);

export { app, database, storage };