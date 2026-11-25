// import { auth, db } from "./firebase.js";

// import {
//   createUserWithEmailAndPassword,
//   updateProfile
// } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// import {
//   doc,
//   setDoc,
//   serverTimestamp
// } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// const form = document.getElementById("registerForm");
// const message = document.getElementById("message");

// if (form) {
//   form.addEventListener("submit", async (event) => {
//     event.preventDefault();

//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const password = document.getElementById("password").value;

//     message.textContent = "Creating account...";

//     try {
//       const result = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       await updateProfile(result.user, {
//         displayName: name
//       });

//       await setDoc(doc(db, "users", result.user.uid), {
//         displayName: name,
//         email: email,
//         createdAt: serverTimestamp()
//       });

//       message.textContent = "Account created successfully! Opening dashboard...";

//       setTimeout(() => {
//         window.location.href = "./dashboard.html";
//       }, 1000);

//     } catch (error) {
//       console.error("Registration error:", error);
//       message.textContent = error.code + ": " + error.message;
//     }
//   });
// }

import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// REGISTRATION
if (registerForm) {
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    message.textContent = "Creating account...";

    try {
      const result = await createUserWithEmailAndPassword(
        auth, email, password
      );

      await updateProfile(result.user, {
        displayName: name
      });

      await setDoc(doc(db, "users", result.user.uid), {
        displayName: name,
        email: email,
        createdAt: serverTimestamp()
      });

      message.textContent = "Account created successfully!";

      window.location.href = "./dashboard.html";

    } catch (error) {
      console.error(error);
      message.textContent = error.code + ": " + error.message;
    }
  });
}

// LOGIN
if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    message.textContent = "Logging in...";

    try {
      await signInWithEmailAndPassword(auth, email, password);

      message.textContent = "Login successful!";

      window.location.href = "./dashboard.html";

    } catch (error) {pageYOffset
      console.error(error);
      message.textContent = error.code + ": " + error.message;
    }
  });
}