var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            // Al inicializar Swiper, muestra la información del slide activo
            const slides = document.querySelectorAll('.tranding-slide');
            slides.forEach(slide => {
                const info = slide.querySelector('.tranding-slide-info');
                info.style.display = 'none'; // Ocultar información de todos los slides
            });
  
            // Mostrar la información del slide activo al iniciar
            const activeSlide = slides[this.activeIndex];
            const activeInfo = activeSlide.querySelector('.tranding-slide-info');
            activeInfo.style.display = 'block';
        },
        slideChange: function () {
            // Ocultar la información de todos los slides cuando cambia
            const slides = document.querySelectorAll('.tranding-slide');
            slides.forEach(slide => {
                const info = slide.querySelector('.tranding-slide-info');
                info.style.display = 'none'; // Ocultar información de todos los slides
            });
  
            // Mostrar la información del slide activo
            const activeSlide = slides[this.activeIndex];
            const activeInfo = activeSlide.querySelector('.tranding-slide-info');
            activeInfo.style.display = 'block';
        },
    },
  });
  
  // Inicialmente ocultar la información de todos los slides
  document.querySelectorAll('.tranding-slide-info').forEach(info => {
    info.style.display = 'none';
  });
  
  // Mostrar la información del slide que esté centrado al cargar la página
  window.addEventListener('load', function () {
    const activeSlide = document.querySelector('.swiper-slide-active');
    const activeInfo = activeSlide.querySelector('.tranding-slide-info');
    activeInfo.style.display = 'block'; // Mostrar la información del slide activo centrado
  });
  