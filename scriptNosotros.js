
const formSuscripcion = document.querySelector(".formularioSuscripcion");

let acc = document.getElementsByClassName("accordion");

const cardMision = document.querySelector(".mision");
const cardVision = document.querySelector(".vision");
const cartas = [cardMision, cardVision];
const refreshAosEffects =() =>{
    let windowWidth = window.innerWidth;
    if (windowWidth < "775") {
        cartas.forEach((carta) => {
 
            switch (carta.getAttribute("data-aos")) {

                case "fade-left":
                    carta.setAttribute("data-aos", "fade-up");
                    break;
                case "fade-right":
                    carta.setAttribute("data-aos", "fade-down");
                    break;
                default:
                    break;
            }
        });
    }
    else{
       cartas.forEach((carta) => {    
        switch (carta.getAttribute("data-aos")) {
            case "fade-up":
                carta.setAttribute("data-aos", "fade-left");
                break;
            case "fade-down":
                carta.setAttribute("data-aos", "fade-right");
                break;
            default:
                break;
        }
       })
    
}
}

// DOMContentLoaded para acordeones
document.addEventListener('DOMContentLoaded', function() {
    Array.from(acc).forEach(function(accordion) {
        accordion.addEventListener("click", function() {
            this.classList.toggle("active");
            var icon = this.querySelector(".icon");
            try{
            if (icon.textContent === "-") {
                icon.textContent = "+";
                icon.classList.remove("iconActive");
            } else {
                icon.textContent = "-";
                icon.classList.add("iconActive");
            }}catch{
                console.log("");
            }

            // var panel = this.nextElementSibling;
            // if (panel.style.maxHeight) {
            //     panel.style.maxHeight = null;
            // } else {
            //     panel.style.maxHeight = panel.scrollHeight + "px";
            // }
        });
    });
});

// Manejo del formulario de suscripción
formSuscripcion.addEventListener("submit", function(event) {

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
refreshAosEffects();
window.addEventListener("resize", refreshAosEffects);
window.addEventListener("load", refreshAosEffects);