var closeMenu = document.querySelector(".close-m");
var box = document.querySelector(".menu-items");
var menuButton = document.querySelector(".menu");


closeMenu.addEventListener('click', function () {
    box.style.visibility = "hidden";
});

menuButton.addEventListener('click', function () {
    box.style.visibility = "visible";
});