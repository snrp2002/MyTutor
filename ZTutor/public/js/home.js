
// Navbar script starts ----------------------------------------------->
const dpIcon = document.getElementById("nav-dp-icon");
const navDropdown = document.getElementById("nav-dropdown");

navDropdown.hidden = true;

dpIcon.addEventListener("click", () => {
navDropdown.hidden = !navDropdown.hidden;
});
// Navbar script ends --------------------------------------------->
