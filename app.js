// const loaderElement = document.querySelector(".contenedorLoader");
// const header = document.querySelector('.header');
// let acc = document.getElementsByClassName("accordion");
// const btnMenu = document.querySelector(".menuResp");
// const navHeader = document.querySelector(".navBarHeader");
// const iconoheader = document.querySelector(".fa-bars");

// let contenidoDrop =document.querySelector(".contenidoDrop");
// let btnDrop=document.querySelector(".btnDesDrop");


// const linkImg = document.querySelector("#contenedorRoadmap");
// const lupa= document.querySelector(".fa-shake")
// const img=document.querySelector(".imgRoadmap");
// linkImg.onmouseover= () =>{
//     lupa.classList.remove("ocultar");
//     lupa.classList.add("centrar")
   
// }
// linkImg.onmouseout = () =>{
//     lupa.classList.add("ocultar");
//     lupa.classList.remove("centrar")
 
// }

// // Evento de load para ocultar el loader
// window.addEventListener('load', function() {
//     if (loaderElement) {
//         loaderElement.classList.add("loader-hidden");
//         console.log("Loader ocultado");
//     } else {
//         console.error("No se encontró el elemento del loader");
//     }
// });


// // Función para mostrar/ocultar el menú
// function mostrarMenu() {
//     navHeader.classList.toggle("mostrarNav");
//     iconoheader.classList.toggle("fa-bars");
//     iconoheader.classList.toggle("fa-x");
// }

// // función para desplegar el drop
// function desplegarDrop(){
//     contenidoDrop.classList.toggle("contenidoActivo");

//     if (btnDrop.textContent === "Ver menos"){
//         btnDrop.textContent = "Mas info";
//     }
//     else{
//         btnDrop.textContent = "Ver menos";
//     }
// }
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000; // Permitir puerto configurable
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer'); // Asegúrate de tener nodemailer instalado
const bodyParser = require('body-parser');

// Configuración de CORS
app.use(cors({
    origin: ['http://127.0.0.1:5501', 'https://www.digitalme.com.ar'], // Añade los orígenes permitidos
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
}));

// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Archivos estáticos (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Ruta para la suscripción al newsletter
app.post("/subscribe", (req, res) => {
    const { correo } = req.body;

    // Validamos el correo electrónico
    if (!correo || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        return res.status(400).json({ message: "Correo electrónico inválido" });
    }

    // Aquí puedes manejar la lógica de suscripción si es necesario.
    return res.status(200).json({ message: "Correo suscrito correctamente" });
});

// Ruta para manejar el formulario de contacto
app.post("/submit", (req, res) => {
    const { nombre, apellido, correo, telefono, mensaje, checkboxCorreo } = req.body;

    const secretKey = process.env.RECAPTCHA_SECRET_KEY; 
    const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`;
    
    // Validaciones
    if (!nombre || !apellido || !correo || !telefono || !mensaje) {
        return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    // Aquí configurarías el envío del correo usando EmailJS o cualquier otro servicio
    const templateParams = {
        nombre,
        apellido,
        correo,
        telefono,
        mensaje,
        checkboxCorreo
    };

    // Envío de correo usando EmailJS (asegúrate de haber configurado EmailJS correctamente)
    emailjs.send("service_613tb74", "template_lmigygj", templateParams, "digitalmeContac")
        .then(() => {
            res.status(200).json({ message: "Mensaje enviado correctamente" });
        })
        .catch((error) => {
            console.error("Error al enviar el correo:", error);
            res.status(500).json({ message: "Error al enviar el correo." });
        });
});

// Manejo de rutas no definidas
app.use((req, res) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


