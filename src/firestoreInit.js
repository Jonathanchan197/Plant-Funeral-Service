import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUX6smy8-FLiyQCs_ZgAzOBfip7n38jIA",
  authDomain: "plant-funeral-service.firebaseapp.com",
  projectId: "plant-funeral-service",
  storageBucket: "plant-funeral-service.appspot.com",
  messagingSenderId: "1012542703996",
  appId: "1:1012542703996:web:8ffbbce41704ecc496bcf9",
  measurementId: "G-THP3EDQBP4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();