document.addEventListener("DOMContentLoaded", () => {
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
