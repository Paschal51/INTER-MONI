
// ===================================
// INTER MONI - JAVASCRIPT
// ===================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

}


// 2. CLOSE MENU AFTER CLICKING A LINK

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuToggle) {

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

            menuToggle.setAttribute("aria-label", "Open navigation");
            menuToggle.setAttribute("aria-expanded", "false");
        }

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


// 6. WEBSITE LOADED MESSAGE

console.log("Inter Moni demonstration website loaded successfully.");
