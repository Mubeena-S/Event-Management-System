const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been received! We'll get back to you shortly.");
});
