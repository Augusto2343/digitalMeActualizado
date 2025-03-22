gsap.registerPlugin(ScrollTrigger);

let speed = 10; // Velocidad inicial

// Animación de la cinta con GSAP
let cintaAnimation = gsap.to(".cinta", {
    x: "-50%",
    duration: speed,
    repeat: -1,
    ease: "linear"
});

// Función para pausar, reanudar y cambiar la velocidad
document.getElementById("toggleAnimation").addEventListener("click", function() {
    if (cintaAnimation.isActive()) {
        cintaAnimation.pause();
        this.textContent = "Reanudar Animación";
    } else {
        cintaAnimation.play();
        this.textContent = "Detener Animación";
    }
});

// Agregar efecto de scroll con ScrollTrigger
ScrollTrigger.create({
    trigger: ".cinta-wrapper",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
    onUpdate: (self) => {
        let velocity = Math.abs(self.getVelocity() / 300);
        cintaAnimation.duration(Math.max(5, Math.min(15, 10 - velocity))); 
    }
});
