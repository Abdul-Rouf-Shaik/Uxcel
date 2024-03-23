let overlay = document.querySelector("#overlay")
let clr = document.querySelector(".nav .nav-part2 i");
let navbar = document.querySelector(".nav .nav-part2");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    navbar.style.right = 0;
    overlay.classList.toggle("overlay");
});


clr.addEventListener("click", () => {
    navbar.style.right = "-500px";
    overlay.classList.toggle("overlay");
});



