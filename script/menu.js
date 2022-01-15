var closeMenu = document.querySelector(".close-m");
var menu = document.querySelector(".menu-items");
var menuButton = document.querySelector(".menu");


function no_more_popups() {
    console.log(22);
    menu.style.visibility = "hidden";
}

menuButton.addEventListener('click', function () {
    menuButton.style.visibility = "hidden";
    menu.style.visibility = "visible";
});