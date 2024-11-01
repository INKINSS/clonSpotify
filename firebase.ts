// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOEER8qxpKPDVrxkSe_29yiy7Mx6ubpS0",
  authDomain: "clonspotify-87560.firebaseapp.com",
  databaseURL: "https://clonspotify-87560-default-rtdb.firebaseio.com",
  projectId: "clonspotify-87560",
  storageBucket: "clonspotify-87560.appspot.com",
  messagingSenderId: "274270342931",
  appId: "1:274270342931:web:d7fb1d7e538ef428c814e6",
  measurementId: "G-HTYDS58ZC6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getDatabase(app)

