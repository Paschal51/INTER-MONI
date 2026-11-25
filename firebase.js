import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// YOUR FIREBASE PROJECT CONFIGURATION
const firebaseConfig = {
  apiKey: "AIzaSyDPGjTTLb_5aE76AqZJq778lf1goewObDg",
  authDomain: "inter-moni.firebaseapp.com",
  projectId: "inter-moni",
  storageBucket: "inter-moni.firebasestorage.app",
  messagingSenderId: "1071620534839",
  appId: "1:1071620534839:web:aa8385865a3d09d15105b2",
  measurementId: "G-DWNGNQCPZL"
};

// INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);

// INITIALIZE AUTHENTICATION
export const auth = getAuth(app);

// INITIALIZE FIRESTORE
export const db = getFirestore(app);

console.log("Inter Moni Firebase connected!");