let arrProductos
const productsContainer = document.querySelector(".productsCards");
const traerCarrito = async() =>{
    if(!localStorage.getItem("productos")){
    const respuesta = fetch("../productos/productos.json")
        .then(respuesta => respuesta.json())
        .then(productos =>{
            arrProductos=productos;
            return(showProducts());
        })
        .catch(error => alert("Algo ha malido sal"))
    }
   else{
    arrProductos=JSON.parse(localStorage.getItem("productos"));
    console.log(arrProductos)
    return showProducts();
}

}
traerCarrito();


const showProducts = () =>{
    arrProductos.forEach((producto) =>{
        if(producto.stock+1){
    productsContainer.innerHTML +=`
                <div class="card">
                <img src="../imagenes/269257865_11240811.jpg" alt="imagenProducto" class="imgProducto">
                <div class="txtBtnsCard">
                    <div class="descrTitlePrice">
                    <div class="titleDescrCard">
                        <h2 class="productTitle">${producto.titulo}</h2>
                        <p class="descripcionProd">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cupiditate, eligendi modi temporibus corrupti fuga debitis amet doloribus minima maiores, saepe ducimus optio quae perspiciatis reprehenderit nulla. Quae, accusamus nemo.
                        </p>
                    </div>
                    <h3 class="price">$${producto.precio}</h3>
                </div>
                <div class="utilityButtons">
                    <button id=${producto.id} class="eliminar">Eliminar</button>
                    <button class="comprar">Ir a pagar</button>
                </div>
                </div>
            </div>
    `
}
});
}
