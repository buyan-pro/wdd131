// Get current year
const currentYear = new Date().getFullYear();

// Insert current year into span
document.getElementById("currentyear").textContent = currentYear;

// Insert last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {

    // Toggle navigation menu
    navigation.classList.toggle("open");

    // Change hamburger icon
    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});