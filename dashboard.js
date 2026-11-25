
import { auth } from "./firebase.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// USER INFORMATION
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

const logoutBtn = document.getElementById("logoutBtn");

// CHECK LOGIN STATUS
onAuthStateChanged(auth, (user) => {
  if (user) {
    const name = user.displayName || "User";
    const email = user.email || "";

    userName.textContent = name;
    userEmail.textContent = email;

    profileName.textContent = name;
    profileEmail.textContent = email;

  } else {
    window.location.href = "login.html";
  }
});

// SIDEBAR NAVIGATION
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const sectionId = link.dataset.section;

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    sections.forEach((section) => {
      section.classList.remove("active");
    });

    link.classList.add("active");

    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
      selectedSection.classList.add("active");
    }
  });
});

// LOGOUT
logoutBtn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    window.location.href = "login.html";
  } catch (error) {
    console.error("Logout error:", error);
  }
});
