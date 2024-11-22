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


// Sección Carrusel

let index = 0;

function cambiarSlide(n) {
    const slides = document.querySelectorAll('.carrusel-item');
    const dots = document.querySelectorAll('.dot');

    // Quitar clase 'active' de todos los slides y puntos
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Actualizar índice
    index += n;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    // Aplicar clase 'active' a la imagen y al punto actuales
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    // Actualizar posición del carrusel
    const offset = -index * 100;
    document.querySelector('.carrusel-inner').style.transform = `translateX(${offset}%)`;
}

function irASlide(n) {
    index = n;
    cambiarSlide(0); // Llama a cambiarSlide para actualizar la posición sin cambiar el índice
}

// Cambiar automáticamente cada 6 segundos
setInterval(() => {
    cambiarSlide(1);
}, 6000);

// Inicializar el primer punto y la primera imagen como activos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carrusel-item')[0].classList.add('active');
    document.querySelectorAll('.dot')[0].classList.add('active');
});

