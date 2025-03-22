const linkImg = document.querySelector("#contenedorRoadmap");
const lupa= document.querySelector(".fa-shake")
const img=document.querySelector(".imgRoadmap");
linkImg.onmouseover= () =>{
    lupa.classList.remove("ocultar");
    lupa.classList.add("centrar")
    img.classList.add("transicion");
}
linkImg.onmouseout = () =>{
    lupa.classList.add("ocultar");
    lupa.classList.remove("centrar")
    img.classList.remove("transicion");
}