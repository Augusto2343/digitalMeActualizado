/* document.addEventListener("DOMContentLoaded", () => {
  const tarjetas = document.querySelectorAll(".tarjeta");
  const hoja = document.getElementById("contenido-hoja");
  const precioTotal = document.getElementById("precio-total");
  let total = 0;
  let seleccionadas = new Set(); // Para evitar duplicados

  // Diccionario de imágenes para cada sección
  const imagenes = {
    Galería: "../imagenes/presupuesto/Galeria.jpg",
    Formulario: "../imagenes/presupuesto/Formulario.jpg",
    Login: "../imagenes/presupuesto/Login.jpg",
    Header: "../imagenes/presupuesto/Header_page-0001.jpg",
    Mapa: "../imagenes/presupuesto/Mapa.jpg",
    Newsletter: "../imagenes/presupuesto/Newsletter.jpg",
    AboutMe: "../imagenes/presupuesto/AboutMe.jpg",
    Banner: "../imagenes/presupuesto/Banner.jpg",
    Carrito: "../imagenes/presupuesto/Carrito.jpg",
    Carrusel: "../imagenes/presupuesto/Carrusel.jpg",
    Comentarios: "../imagenes/presupuesto/Comentarios.jpg",
    DescrProducto: "../imagenes/presupuesto/DescripcionProducto.jpg",
    Ecommerce: "../imagenes/presupuesto/Ecommerce.jpg",
    FooterAvanzado: "../imagenes/presupuesto/FooterAvanzado.jpg",
    FooterSimple: "../imagenes/presupuesto/FooterSimple.jpg",
    Proyectos: "../imagenes/presupuesto/Proyectos.jpg",
    Redes: "../imagenes/presupuesto/Redes.jpg",
    Services: "../imagenes/presupuesto/Services.jpg",
    Video: "../imagenes/presupuesto/Video.jpg",
  };

  tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => {
      const nombre = tarjeta.dataset.nombre;
      const precio = parseInt(tarjeta.dataset.precio);

      // Verificar si ya está seleccionada
      if (seleccionadas.has(nombre)) {
        Swal.fire({
            icon: "warning",
            title: "Sección ya agregada",
            text: `La sección "${nombre}" ya está en la lista.`,
            confirmButtonText: "Entendido",
        });
        return;
    }


      // Crear contenedor para imagen y botón
      const contenedor = document.createElement("div");
      contenedor.classList.add("contenedor-seccion");

      // Agregar imagen
      const nuevaImagen = document.createElement("img");
      nuevaImagen.src = imagenes[nombre];
      nuevaImagen.alt = nombre;
      nuevaImagen.classList.add("img-seccion");

      // Crear botón de eliminar
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.classList.add("btn-eliminar");

      // Evento para eliminar imagen y actualizar precio
      botonEliminar.addEventListener("click", () => {
        console.log(`Intentando eliminar: ${nombre}`);
        Swal.fire({
            title: "¿Seguro que quieres eliminar esta sección?",
            text: `Se eliminará "${nombre}" y su costo se restará del total.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
              console.log("Eliminación confirmada");
                hoja.removeChild(contenedor); // Eliminar contenedor
                seleccionadas.delete(nombre); // Quitar del conjunto
                total -= precio; // Restar del total
                precioTotal.textContent = total; // Actualizar en pantalla

                Swal.fire({
                    icon: "success",
                    title: "Sección eliminada",
                    text: `"${nombre}" ha sido eliminada correctamente.`,
                    confirmButtonText: "OK"
                });
            }
        });
    });
      // Agregar imagen y botón al contenedor
      contenedor.appendChild(nuevaImagen);
      contenedor.appendChild(botonEliminar);

      // Agregar contenedor a la hoja
      hoja.appendChild(contenedor);

      // Agregar al conjunto de seleccionadas
      seleccionadas.add(nombre);

      // Actualizar precio total
      total += precio;
      precioTotal.textContent = total;
    });
  });
});
 */

// document.addEventListener("DOMContentLoaded", () => {
//   const tarjetas = document.querySelectorAll(".tarjeta");
//   const hoja = document.getElementById("contenido-hoja");
//   const precioTotal = document.getElementById("precio-total");
//   let total = 0;
//   let seleccionadas = new Set(); // Para evitar duplicados

  // Diccionario de imágenes para cada sección
  const imagenes = {
    Galería: "../imagenes/presupuesto/Galeria.jpg",
    Formulario: "../imagenes/presupuesto/Formulario.jpg",
    Login: "../imagenes/presupuesto/Login.jpg",
    Header: "../imagenes/presupuesto/Header_page-0001.jpg",
    Mapa: "../imagenes/presupuesto/Mapa.jpg",
    Newsletter: "../imagenes/presupuesto/Newsletter.jpg",
    AboutMe: "../imagenes/presupuesto/AboutMe.jpg",
    Banner: "../imagenes/presupuesto/Banner.jpg",
    Carrito: "../imagenes/presupuesto/Carrito.jpg",
    Carrusel: "../imagenes/presupuesto/Carrusel.jpg",
    Comentarios: "../imagenes/presupuesto/Comentarios.jpg",
    DescrProducto: "../imagenes/presupuesto/DescripcionProducto.jpg",
    Ecommerce: "../imagenes/presupuesto/Ecommerce.jpg",
    FooterAvanzado: "../imagenes/presupuesto/FooterAvanzado.jpg",
    FooterSimple: "../imagenes/presupuesto/FooterSimple.jpg",
    Proyectos: "../imagenes/presupuesto/Proyectos.jpg",
    Redes: "../imagenes/presupuesto/Redes.jpg",
    Services: "../imagenes/presupuesto/Services.jpg",
    Video: "../imagenes/presupuesto/Video.jpg",
  };

//   let items = [];
  
//   const contenidoHoja = document.getElementById('contenido-hoja');
//   const precioTotalSpan = document.getElementById('precio-total');
//   const tbody = document.getElementById('itemsLista');
  
//   tarjetas.forEach(tarjeta => {
//     tarjeta.addEventListener('click', () => {
//       const id = tarjeta.dataset.id;
//       const nombre = tarjeta.dataset.description;
//       const precio = parseInt(tarjeta.dataset.cost);
  
//       if (seleccionadas.has(id)) {
//         Swal.fire("Ya agregaste esta sección", "", "info");
//         return;
//       }
  
//       seleccionadas.add(id);
//       items.push({ id, qty: 1, description: nombre, cost: precio });
  
//       const preview = document.createElement('div');
//       preview.className = 'preview-item';
//       preview.textContent = nombre;
//       contenidoHoja.appendChild(preview);
  
//       actualizarPresupuesto();
//     });
//   });
  
//   function actualizarPresupuesto() {
//     tbody.innerHTML = '';
//     let subtotal = 0;
  
//     items.forEach(item => {
//       subtotal += item.cost;
//       const fila = document.createElement('tr');
//       fila.innerHTML = `
//         <td>X${item.qty}</td>
//         <td>${item.id}</td>
//         <td>${item.description}</td>
//         <td>$${item.cost.toLocaleString()}</td>
//       `;
//       tbody.appendChild(fila);
//     });
  
//     const iva = subtotal * 0.10;
//     const total = subtotal + iva;
  
//     document.getElementById('subtotal').textContent = subtotal.toFixed(2);
//     document.getElementById('iva').textContent = iva.toFixed(2);
//     document.getElementById('total').textContent = total.toFixed(2);
//     precioTotalSpan.textContent = subtotal.toLocaleString();
//   }
  
//   // Mostrar presupuesto al usuario
//   document.getElementById('mostrarPresupuesto').addEventListener('click', () => {
//     document.getElementById('presupuesto').style.display = 'block';
//     document.getElementById('fechaActual').textContent = new Date().toLocaleDateString('es-ES', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   });
  
//   // Descargar como PDF
//   document.querySelector('#descargarPresupuesto').addEventListener('click', () => {
//     const elemento = document.getElementById('presupuesto');
//     const opciones = {
//       margin: 10,
//       filename: 'Presupuesto.pdf',
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
//     };
//     html2pdf().set(opciones).from(elemento).save();
//   });
  
// });

let items = [];
let contador = 1;
let precioTotal = 0;
let seleccionadas = new Set();
const btnEliminar = [];
const hoja = document.getElementById("contenido-hoja");
document.querySelectorAll('.tarjeta').forEach(tarjeta => {
  tarjeta.addEventListener('click', () => {
    const nombre = tarjeta.getAttribute('data-nombre');
    const precio = parseInt(tarjeta.getAttribute('data-precio'));
    
      let condicion = items.findIndex(item => item.nombre === nombre);
      console.log(condicion)
    if(condicion !== -1){
      Swal.fire({
        icon:"warning",
        title:"Sección ya agregada",
        text:`La seccion "${nombre}" ya esta en la lista`,
        confirmButtonText:"Entendido"
    });
    return;
    }
      // Agregar contenedor con imagen y botón de eliminar
      const nuevaImagen = document.createElement("img");
      nuevaImagen.src = imagenes[nombre];
      nuevaImagen.alt = nombre;
      nuevaImagen.classList.add("img-seccion");
      nuevaImagen.id = `img${nombre}`;

      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.classList.add("btn-eliminar");
      botonEliminar.setAttribute("data-name", nombre);
      botonEliminar.id = `btn${nombre}`;
      btnEliminar.push({
        element: botonEliminar,
        id: `btn${nombre}`,
        nombre: nombre
      });
      btnEliminar.forEach(boton => {
        console.log(boton.nombre);
      });

      const nombreSeccion = document.createElement("h3");
      nombreSeccion.textContent = nombre;
      nombreSeccion.classList.add("nombre-seccion");
      const contenedor = document.createElement("imgBtnHoja");
        contenedor.appendChild(nuevaImagen);
        contenedor.appendChild(nombreSeccion);
        contenedor.setAttribute("data-name", nombre);
        contenedor.appendChild(botonEliminar);
        botonEliminar.id = `seccion${nombre}`;
      items.push({
        element:contenedor,
        id: `seccion${nombre}`,
        nombre: nombre,
        qty: 1,
        description: nombre,
        cost: precio.toFixed(2)
      }
      );
      // Crear botón de eliminar

    //Añadir imagen y boton eliminar en hoja 

    hoja.appendChild(contenedor);


    actualizarPresupuesto();
    precioTotal += precio;
    document.getElementById('precio-total').textContent = precioTotal;


  //   const nuevoElemento = document.createElement('div');
  //   nuevoElemento.textContent = nombre;
  //   document.getElementById('contenido-hoja').appendChild(nuevoElemento);    
  });
});


function eliminarElemento(nombre) {
Swal.fire({
  title: "¿Seguro que quieres eliminar este ítem?",
  text: "Se restará del total.",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#d33",
  cancelButtonColor: "#3085d6",
  confirmButtonText: "Sí, eliminar",
  cancelButtonText: "Cancelar"
}).then((result) => {
  if (result.isConfirmed) {

    const index = items.findIndex(item => item.nombre === nombre);
    if (index !== -1) {

        console.log("Elemento encontrado:", items[index].nombre);
        hoja.removeChild(items[index].element);
        items.splice(index, 1);
        console.log(items);
         
        console.log("Elemento eliminado:", nombre);
        
        // Actualizar el precio total
        precioTotal =  items.reduce((sum, item) => sum + parseFloat(item.cost), 0);
        document.getElementById('precio-total').textContent = precioTotal;
        actualizarPresupuesto();

        Swal.fire({
            icon: "success",
            title: "Ítem eliminado",
            text: "Se ha eliminado correctamente.",
            confirmButtonText: "OK"
        });
    }
  }
});
}
//Configurador
const actualizarListElementos= (nombre, id)=>{
  

}

 //Presupuesto  

function actualizarPresupuesto() {
let tbody = document.getElementById('itemsLista');
tbody.innerHTML = '';

let subtotal = 0;
items.forEach(item => {
  subtotal += parseFloat(item.cost);
  let fila = document.createElement("tr");

  fila.innerHTML = `
      <td>X${item.qty}</td>
      <td>${item.id}</td>
      <td>${item.description}</td>
      <td>$${item.cost}</td>
  
  `;

  tbody.appendChild(fila);
});

let iva = subtotal * 0.10;
let total = subtotal + iva;

document.getElementById('subtotal').textContent = subtotal.toFixed(2);
document.getElementById('iva').textContent = iva.toFixed(2);
document.getElementById('total').textContent = total.toFixed(2);

// Agregar eventos de eliminar a los botones recién creados
document.querySelectorAll('.btn-eliminar').forEach(boton => {
  boton.addEventListener('click', function () {
      console.log(boton.getAttribute('data-name'));
      nombre=boton.getAttribute("data-name");
      eliminarElemento(nombre);
  });
});
document.getElementById('mostrarPresupuesto').addEventListener('click', () => {
  document.getElementById('presupuesto').style.display = 'block';
});
}

function generarPDF() {
const elemento = document.getElementById('presupuesto');
// <img src="data:image/png;base64,{{base64_image_data}}" alt="Imagen del presupuesto" />
const opciones = {
margin: [10, 10, 10, 10],
filename: 'Presupuesto.pdf',
html2canvas: { scale: 1.5 },
jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
};


html2pdf()
.from(elemento)
.set(opciones)
.save();
}