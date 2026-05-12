// Get current year
const currentYear = new Date().getFullYear();

// Insert current year into span
document.getElementById("currentyear").textContent = currentYear;

// Insert last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;