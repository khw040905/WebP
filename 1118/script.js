
/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("open");

        if (nav.classList.contains("open")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
    });
}


/* ==========================
   CLOSE MENU AFTER CLICK
========================== */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("open");

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }
    });
});


/* ==========================
   AUTOMATIC YEAR
========================== */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* ==========================
   SCROLL REVEAL
========================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});


/* ==========================
   ACTIVE NAVIGATION
========================== */

const pageSections = document.querySelectorAll(".page[id]");

const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute("id");

            navLinks.forEach(function (link) {
                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + currentId) {
                    link.classList.add("active");
                }
            });
        }
    });
}, {
    threshold: 0.45
});

pageSections.forEach(function (section) {
    sectionObserver.observe(section);
});


/* ==========================
   BUTTON HOVER FEEDBACK
========================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
    button.addEventListener("mouseenter", function () {
        button.style.transition = "0.25s";
    });
});


/* ==========================
   CONSOLE MESSAGE
========================== */

console.log("KHW Portfolio loaded successfully.");
console.log("Keep learning. Keep building.");
