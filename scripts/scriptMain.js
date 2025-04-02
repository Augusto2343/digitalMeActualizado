const loaderElement = document.querySelector(".contenedorLoader");
const header = document.querySelector('.header');
let acc = document.getElementsByClassName("accordion");
const btnMenu = document.querySelector(".menuResp");
const navHeader = document.querySelector(".navBarHeader");
const iconoheader = document.querySelector(".fa-bars");


// Variable para controlar la posición de scroll
let lastScrollTop = 0;

// Evento de scroll para mostrar/ocultar el header
window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
        header.classList.add("hide"); // Scroll hacia abajo
    } else {
        header.classList.remove("hide"); // Scroll hacia arriba
    }
    lastScrollTop = scrollTop; // Actualizamos lastScrollTop
});

// Evento de load para ocultar el loader
window.addEventListener('load', function() {
    if (loaderElement) {
        loaderElement.classList.add("loader-hidden");
        console.log("Loader ocultado");
    } else {
        console.error("No se encontró el elemento del loader");
    }
});

// DOMContentLoaded para acordeones
document.addEventListener('DOMContentLoaded', function() {
    Array.from(acc).forEach(function(accordion) {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");

            var icon = this.querySelector(".icon");
            if (icon.textContent === "-") {
                icon.textContent = "+";
                icon.classList.remove("iconActive");
            } else {
                icon.textContent = "-";
                icon.classList.add("iconActive");
            }

            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});

// Función para mostrar/ocultar el menú
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navHeader = document.querySelector(".navBarHeader");

    menuToggle.addEventListener("change", function () {
        navHeader.classList.toggle("mostrarNav");
    });
});
const API_URL = 'http://185.173.111.84:3000'; // Asegúrate de que esta URL esté bien


document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("MU1bIvZaTDBibybec"); // Inicializa EmailJS con tu user ID
});

// Manejo del formulario de contacto
document.querySelector(".formularioContacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Obtiene los valores del formulario
    const apellido = document.querySelector('input[placeholder="Ingrese su Apellido:"]').value;
    const nombre = document.querySelector('input[placeholder="Ingrese su Nombre:"]').value;
    const correo = document.querySelector('input[placeholder="Ingrese su Correo:"]').value;
    const telefono = document.querySelector('input[placeholder="Ingrese su Teléfono:"]').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;
    const checkboxCorreo = document.querySelector('input[name="checkboxCorreo"]').checked;

    // Obtiene el token de reCAPTCHA
    const recaptchaResponse = grecaptcha.getResponse();

    // Verifica si el reCAPTCHA fue completado
    if (!recaptchaResponse) {
        return Swal.fire({
            title: 'Error',
            text: 'Por favor verifica que no eres un robot.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    }

    // Envía la solicitud a EmailJS
    emailjs.send("service_613tb74", "template_lmigygj", {
        apellido: apellido,
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        mensaje: mensaje,
        checkboxCorreo: checkboxCorreo
    }, "MU1bIvZaTDBibybec")
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
            title: '¡Éxito!',
            text: 'Correo enviado correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        grecaptcha.reset(); // Resetea el reCAPTCHA
    })
    .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
            title: 'Error',
            text: 'Hubo un error al enviar la solicitud.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    });
});

// Manejo del formulario de suscripción
document.querySelector(".formularioSuscripcion").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    const correoSuscripcion = document.getElementById('inputCorreo').value;

    // Envía la solicitud a EmailJS para la suscripción
    emailjs.send("service_613tb74", "template_54jigld", {
        correo: correoSuscripcion
    }, "MU1bIvZaTDBibybec")
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        Swal.fire({
            title: '¡Éxito!',
            text: 'Suscripción realizada correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        document.getElementById('inputCorreo').value = ''; // Limpia el campo de correo
    })
    .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
            title: 'Error',
            text: 'Hubo un error al enviar la solicitud de suscripción.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    });
});
