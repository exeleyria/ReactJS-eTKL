import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  /*apiKey: process.env.API_KEY,*/
  apiKey: "AIzaSyAW6JKxh2OW9ZMVSs7xd-xS8gKitWKOkbo",
  authDomain: "etkl-c30c7.firebaseapp.com",
  projectId: "etkl-c30c7",
  storageBucket: "etkl-c30c7.appspot.com",
  messagingSenderId: "427662673631",
  appId: "1:427662673631:web:edb8b14512bb6daeab0b6a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;