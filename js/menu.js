window.addEventListener("DOMContentLoaded", (event)=> {
    const menuBtn = document.getElementById("menu");
    const nav = document.querySelector("nav");

    menuBtn.addEventListener("click", (event) => {
        menuBtn.classList.toggle("salir");
        nav.classList.toggle("visible");
    })
});