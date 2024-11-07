// header 
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


//   footer  // To Get the current year
const currentYear = new Date().getFullYear();
document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Techynews. All rights reserved.`;
