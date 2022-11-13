// Navbar script starts ----------------------------------------------->
const dpIcon = document.getElementById("nav-dp-icon");
const navDropdown = document.getElementById("nav-dropdown");

navDropdown.hidden = true;

dpIcon.addEventListener("click", () => {
    notiDropdown.hidden = true;
    navDropdown.hidden = !navDropdown.hidden;
});
// Navbar script ends --------------------------------------------->


// Notification script starts -------------------------------------------->
const notiIcon = document.getElementById("noti-icon");
const notiDropdown = document.getElementById("noti-dropdown");

notiDropdown.hidden = true;

notiIcon.addEventListener("click", () => {
    notiDropdown.hidden = !notiDropdown.hidden;
    navDropdown.hidden = true;
});
// Notificatiion script ends --------------------------------------------->
