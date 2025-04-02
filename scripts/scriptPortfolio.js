const cards = document.getElementsByClassName("card");
const cardContainer = document.querySelector(".cards");
const arrayCards = Array.from(cards);
cardContainer.onmouseover = (e) => {
    if (e.target.classList.contains("card")) {

        aplicarBlur(e.target.id);
        
    }
};
cardContainer.onmouseleave = () =>{
    arrayCards.forEach((carta) => {
        carta.classList.remove("cardInactive");
    });
}
const aplicarBlur = (card) =>{
        arrayCards.forEach((carta) => {

            if(carta.id != card){
            carta.classList.add("cardInactive");
            }
        else{
            carta.classList.remove("cardInactive");
        }

        });
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, get, set, onValue } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAhypRjmD3FT8GtJKCRuS7nDuverdQFiSc",
    authDomain: "likesportfolios.firebaseapp.com",
    projectId: "likesportfolios",
    storageBucket: "likesportfolios.firebasestorage.app",
    messagingSenderId: "104267241637",
    appId: "1:104267241637:web:bb1d83b909c3001baed54c",
    measurementId: "G-1RN8TK9EEH",
    databaseURL: "https://likesportfolios-default-rtdb.firebaseio.com/"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Función para manejar los likes
document.querySelectorAll(".proyecto").forEach((card) => {
    const projectId = card.getAttribute("data-id");
    const likeCount = card.querySelector(".like-count");
    const likeBtn = card.querySelector(".like-btn");

    const likesRef = ref(database, `likes/${projectId}`);

    // Escuchar los cambios en los likes en Firebase
    onValue(likesRef, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
            likeCount.textContent = data;
        }
    });

    // Agregar evento de clic a cada botón de "like"
    likeBtn.addEventListener("click", () => {
        get(likesRef).then((snapshot) => {
            let currentLikes = snapshot.val() || 0;
            set(likesRef, currentLikes + 1);
        });
    });
});
