import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyChG-szgkjmrNXH2AaS8T0MCYUvMp9ZkzI",
    authDomain: "reactclone-eb4d7.firebaseapp.com",
    projectId: "reactclone-eb4d7",
    storageBucket: "reactclone-eb4d7.appspot.com",
    messagingSenderId: "763039878671",
    appId: "1:763039878671:web:70e0f6f3df646913aa1d7a",
    measurementId: "G-R0ZYJT4PH8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };