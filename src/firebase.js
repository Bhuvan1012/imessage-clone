// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { GoogleAuthProvider, getAuth } from "firebase/auth";
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDiBeWTd-vspBPCy8xB3JZGz4ZZzWe95QM",
  authDomain: "imessage-clone-a443f.firebaseapp.com",
  projectId: "imessage-clone-a443f",
  storageBucket: "imessage-clone-a443f.appspot.com",
  messagingSenderId: "222797968552",
  appId: "1:222797968552:web:0d9fe17a067af9ee4b7e9d",
  measurementId: "G-XDFCB6SWMQ",
};

// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
// const auth = getAuth();
// const provider = new GoogleAuthProvider();

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
