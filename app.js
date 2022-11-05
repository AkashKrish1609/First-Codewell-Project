const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector("nav>ul");

hamburger.addEventListener("click", function(){
    navbar.classList.toggle("hide-mobile")
})