import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCifDwAM85w4yk5m1-jmILl4xyiSIYD-f4",
  authDomain: "image-community-cca9b.firebaseapp.com",
  projectId: "image-community-cca9b",
  storageBucket: "image-community-cca9b.appspot.com",
  messagingSenderId: "128801728260",
  appId: "1:128801728260:web:50e46b260d016b602bd251",
  measurementId: "G-63RQ80NWJP",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;
const firestore = firebase.firestore();


export { auth, apiKey, firestore};