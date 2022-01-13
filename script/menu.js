var closeMenu = document.querySelector(".close-m");
var box = document.querySelector(".menu-items");
var menuButton = document.querySelector(".menu");


function close_m() {
    box.style.visibility = "hidden";
}

menuButton.addEventListener('click', function () {
    menuButton.style.visibility = "hidden";
    box.style.visibility = "visible";
});