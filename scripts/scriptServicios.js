let contenidoDrop =document.querySelector(".contenidoDrop");
let btnDrop=document.querySelector(".btnDesDrop");


function desplegarDrop(){
    contenidoDrop.classList.toggle("contenidoActivo");

    if (btnDrop.textContent === "Mas info"){
        btnDrop.textContent = "Ver menos";
    }
    else{
        btnDrop.textContent = "Mas info";
    }
}