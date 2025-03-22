const loaderElement = document.querySelector(".contenedorLoader");
const header = document.querySelector('.header');
const btnMenu = document.querySelector(".menuResp");
const navHeader = document.querySelector(".navBarHeader");
const iconoheader = document.querySelector(".fa-bars");

let lastScrollTop = 0;



window.addEventListener('load', function() {
    if (loaderElement) {
        loaderElement.classList.add("loader-hidden");
        console.log("Loader ocultado");
    } else {
        console.error("No se encontró el elemento del loader");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navHeader = document.querySelector(".navBarHeader");

    menuToggle.addEventListener("change", function () {
        navHeader.classList.toggle("mostrarNav");
    });
});

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        header.classList.add("hide"); // Scroll hacia abajo
    } else {
        header.classList.remove("hide"); // Scroll hacia arriba
    }
    lastScrollTop = scrollTop; // Actualizamos lastScrollTop
});
