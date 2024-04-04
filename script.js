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


gsap.to("#page2 .left img,#page2 .right img ", {
    transform: "scale(1.6)",
    scrollTrigger: {
        // markers: true,
        trigger: "#page2",
        start: "top 80%",
        end: "bottom 10%",
        scrub: 2
    }
})


