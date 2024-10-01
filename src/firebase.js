// src/firebase.js
import { initializeApp } from "firebase/app"; // Ubah di sini
import { getFirestore } from "firebase/firestore"; // Ubah di sini

const firebaseConfig = {
    apiKey: "AIzaSyA5W1IxCgna0NrU9OpZOyEl5C_H1syKRBo",
    authDomain: "chrome-diorama-382905.firebaseapp.com",
    databaseURL: "https://chrome-diorama-382905-default-rtdb.firebaseio.com",
    projectId: "chrome-diorama-382905",
    storageBucket: "chrome-diorama-382905.appspot.com",
    messagingSenderId: "968837931304",
    appId: "1:968837931304:web:40c78c9008380de3a4701d",
    measurementId: "G-8TEXQJ1P3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Ubah di sini

// Initialize Firestore
const db = getFirestore(app); // Ubah di sini

// Export db
export { db };
