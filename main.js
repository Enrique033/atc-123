document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.main-btn');
        const submenu = dropdown.querySelector('.submenu');

        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Evita que el evento burbujee al window
            submenu.classList.toggle('show');
        });

        // Muestra el submenú al pasar el ratón
        btn.addEventListener('mouseenter', function() {
            submenu.style.display = 'block';
        });

        // Oculta el submenú al salir
        btn.addEventListener('mouseleave', function() {
            submenu.style.display = 'none';
        });

        submenu.addEventListener('mouseenter', function() {
            submenu.style.display = 'block';
        });

        submenu.addEventListener('mouseleave', function() {
            submenu.style.display = 'none';
        });
    });

    // Cerrar el submenú si se hace clic fuera de él
    window.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            const submenu = dropdown.querySelector('.submenu');
            submenu.style.display = 'none';
        });
    });
});


//Sección Carrusel

let index = 0;

function cambiarSlide(n) {
    const slides = document.querySelectorAll('.carrusel-item');
    index += n;

    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    const offset = -index * 100;
    document.querySelector('.carrusel-inner').style.transform = `translateX(${offset}%)`;
}

// Cambiar automáticamente cada 4 segundos
setInterval(() => {
    cambiarSlide(1);
}, 4000);


