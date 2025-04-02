
// document
//   .querySelector(".btnPresupuesto")
//   .addEventListener("click", function (event) {
//     event.preventDefault(); // Evita el envío por defecto del formulario

//     const elemento = document.getElementById("presupuesto");
//     html2pdf()
//       .from(elemento)
//       .toPdf()
//       .get("pdf")
//       .then((pdf) => {
//         const blob = pdf.output("blob");
//         const formData = new FormData();
//         formData.append("file", blob, "presupuesto.pdf");
//         console.log("se creo el form para enviar");
//         // Ahora podemos usar formData en el envio del correo
       
//         const emailsParam={
//             to_name:"Destinatario",
//             to_email:"digitalme.ssdigitales@gmail.com",
//             message:"Tienes un nuevo presupuesto generado!",
//             file:formData.get("file")
//         }
       
//         emailjs
//           .send(
//             "service_fbehjlb",
//             "template_gzcf66t",
//             emailsParam,
//             "v8rb-IIgLGG3YPR0H"
//           )
//           .then((response) => {
//             console.log("SUCCESS!", response.status, response.text);
//             Swal.fire({
//               title: "¡Éxito!",
//               text: "Suscripción realizada correctamente.",
//               icon: "success",
//               confirmButtonText: "Aceptar",
//             });
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//             Swal.fire({
//               title: "Error",
//               text: "Hubo un error al enviar la solicitud de suscripción.",
//               icon: "error",
//               confirmButtonText: "Aceptar",
//             });
//           });
//       });
//   });
// ya 
// async function generarEmailParams(elemento) {
//   let emailParams = {};  // Inicializamos la variable

//   try {
//     const canvas = await html2canvas(elemento, {width: 900,height: 500});
//     canvas.toBlob(blob =>{
//       const formData = new FormData();
//       formData.append("archivo", blob, "presupuesto.png");
//       console.log(formData)
//     })


//     emailParams = {
//       to_name: "Destinatario",
//       to_email: "destinatario@example.com",
//       message: "Aquí tienes el presupuesto adjunto.",
//       file: canvas,
//     };

    // Ahora puedes usar emailParams después de la espera
    //console.log(emailParams);  // Verifica que ahora tiene los valores esperados

   //return emailParams;  // Si necesitas devolverlo o usarlo más adelante
  //} catch (error) {
   // console.error("Error al generar la imagen", error);
  //}
//}

// document.querySelector(".btnPresupuesto").addEventListener("click", function () {
//     const elemento = document.getElementById("presupuesto");
  
    // html2pdf()
    //   .from(elemento)
    //   .toPdf()
    //   .output("datauristring") // Genera el PDF en formato Base64
    //   .then((pdfBase64) => {
    //     // Parámetros para enviar el correo con EmailJS
    //     const emailParams = {
    //       to_name: "Destinatario",
    //       to_email: "destinatario@example.com",
    //       message: "Aquí tienes el presupuesto adjunto.",
    //       file: pdfBase64, // Archivo en Base64
    //     };
    //function dataURLtoBlob(dataURL) {
      // Split the data URL into parts
      //const parts = dataURL.split(',');
      //const byteString = atob(parts[1]); // Decode the Base64 string
      //const mimeString = parts[0].split(':')[1].split(';')[0]; // Get the MIME type
  
      // Create a byte array
      //const ab = new Uint8Array(byteString.length);
     // for (let i = 0; i < byteString.length; i++) {
       //   ab[i] = byteString.charCodeAt(i);
      //}
  
      // Create a Blob from the byte array
      //return new Blob([ab], { type: mimeString });
 // }
  
  
    //let emailParams={

    //}

    // generarEmailParams(elemento)
    // .then((emailParams) => {
    //   // Aquí puedes usar emailParams cuando ya se haya generado.
    //   console.log("Email params generados:", emailParams);
    // });

    //     emailjs
    //       .send("service_fbehjlb", "template_gzcf66t", emailParams, "v8rb-IIgLGG3YPR0H")
    //       .then((response) => {
    //         console.log("Correo enviado con éxito", response.status, response.text);
    //         Swal.fire({
    //           title: "¡Éxito!",
    //           text: "El presupuesto fue enviado correctamente.",
    //           icon: "success",
    //           confirmButtonText: "Aceptar",
    //         });
    //       })
    //       .catch((error) => {
    //         console.error("Error al enviar el correo:", error);
    //         Swal.fire({
    //           title: "Error",
    //           text: "Hubo un problema al enviar el presupuesto.",
    //           icon: "error",
    //           confirmButtonText: "Aceptar",
    //         });
    //       });
    //     })

// Función para generar imagen en Base64
// Función para redimensionar la imagen base64
// Función para redimensionar la imagen base64
// Función para redimensionar la imagen base64
// Función para redimensionar la imagen base64 con mejor calidad



// Función para redimensionar la imagen base64
async function resizeBase64Img(base64Img, width, height) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = base64Img;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // Establecer las dimensiones finales deseadas
            canvas.width = width;
            canvas.height = height;

            // Dibujar la imagen redimensionada en el canvas
            ctx.drawImage(img, 0, 0, width, height);

            // Convertir la imagen a base64 con buena calidad (0.8)
            const resizedBase64 = canvas.toDataURL("image/jpeg", 0.8);
            resolve(resizedBase64);
        };
        img.onerror = (error) => reject(error);
    });
}

// Función para generar la imagen base64 desde el HTML
async function generarImagenBase64(elemento) {
    if (!elemento) {
        throw new Error("El elemento no existe.");
    }
    try {
        // Esperar para asegurar que el elemento esté renderizado
        await new Promise((resolve) => setTimeout(resolve, 500));
        
        // Capturar el elemento con mayor resolución (scale: 2)
        const canvas = await html2canvas(elemento, { scale: 2 });
        
        return new Promise((resolve, reject) => {
            // Convertir el canvas a Blob con buena calidad (0.8)
            canvas.toBlob((blob) => {
                console.log(blob); // Verifica que se genera el blob
                if (!blob) {
                    reject("No se pudo generar la imagen.");
                    return;
                }
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result); // Cadena base64
                reader.onerror = (error) => reject(error);
                reader.readAsDataURL(blob);
            }, "image/jpeg", 0.8);
        });
    } catch (error) {
        throw new Error("Error al generar la imagen: " + error.message);
    }
}

// Esperar a que se cargue el DOM para asignar el event listener
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btnPresupuesto").addEventListener("click", async function () {
        const elemento = document.getElementById("presupuesto");
        if (!elemento) {
            Swal.fire({
                title: "Error",
                text: "No se encontró el presupuesto en la página.",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
            return;
        }
        try {
            // Generar la imagen base64 del presupuesto
            const imageBase64 = await generarImagenBase64(elemento);
            console.log("Base64 generado:", imageBase64);

            // Redimensionar la imagen a las dimensiones finales deseadas (400x300)
            const imageBase64Redimensionada = await resizeBase64Img(imageBase64, 400, 300);
            console.log("Base64 redimensionada:", imageBase64Redimensionada);

            // Configurar parámetros para EmailJS
            const emailParams = {
                to_name: "Destinatario",
                to_email: "destinatario@example.com",
                message: "Aquí tienes el presupuesto generado.",
                base64_image_data: imageBase64Redimensionada // Se usa en la plantilla
            };

            // Enviar el correo con EmailJS
            emailjs
                .send("service_fbehjlb", "template_gzcf66t", emailParams, "v8rb-IIgLGG3YPR0H")
                .then((response) => {
                    console.log("Correo enviado con éxito", response.status, response.text);
                    Swal.fire({
                        title: "¡Éxito!",
                        text: "El presupuesto fue enviado correctamente.",
                        icon: "success",
                        confirmButtonText: "Aceptar"
                    });
                })
                .catch((error) => {
                    console.error("Error al enviar el correo:", error);
                    Swal.fire({
                        title: "Error",
                        text: "Hubo un problema al enviar el presupuesto.",
                        icon: "error",
                        confirmButtonText: "Aceptar"
                    });
                });
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al generar la imagen.",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        }
    });
});
