
let acc = document.getElementsByClassName("accordion");

const cardFadeRight = document.querySelector("#cardFadeRight");
const cardFadeLeft = document.querySelector("#cardFadeLeft");

const updateAosEffects = () =>{
    let anchoVentana = window.innerWidth();
    if(anchoVentana > "800px"){
        if(cardFadeLeft.getAttribute(aos-effect));
    }
}
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