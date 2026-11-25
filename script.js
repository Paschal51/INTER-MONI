// ===================================
// INTER MONI - JAVASCRIPT
// ===================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
        menuToggle.setAttribute("aria-label", "Close navigation");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
        menuToggle.setAttribute("aria-label", "Open navigation");
    }

});


// 2. CLOSE MENU AFTER CLICKING A LINK

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

        menuToggle.setAttribute("aria-label", "Open navigation");

    });

});


// 3. ACTIVE NAVIGATION LINKS

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationItems.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


// 4. SMOOTH SCROLLING

const allLinks = document.querySelectorAll('a[href^="#"]');

allLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// 5. UPDATE NAVIGATION BASED ON SCROLL

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationItems.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// 6. DEMONSTRATION BUTTONS

const demoButtons = document.querySelectorAll(
    ".hero-buttons a, .feature-card a, .plan-btn, .cta-btn"
);

demoButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        const target = button.getAttribute("href");

        if (target === "#login") {
            event.preventDefault();

            alert("Inter Moni demo: Login functionality will be added in the next development stage.");
        }

        if (target === "#register") {
            event.preventDefault();

            alert("Inter Moni demo: Registration functionality will be added in the next development stage.");
        }

    });

});


// 7. WEBSITE LOADED MESSAGE

document.addEventListener("DOMContentLoaded", function () {

    console.log("Inter Moni website loaded successfully.");

});