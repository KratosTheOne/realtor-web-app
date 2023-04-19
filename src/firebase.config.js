// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//] TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7hD3n8EQzhluZQKVYocGMTIKaHD9QApE",
  authDomain: "crunch-realtors-react.firebaseapp.com",
  projectId: "crunch-realtors-react",
  storageBucket: "crunch-realtors-react.appspot.com",
  messagingSenderId: "260236139045",
  appId: "1:260236139045:web:6e080cc93e370eb45efdcc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();