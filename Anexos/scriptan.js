document.addEventListener("DOMContentLoaded", function() {
    // Funcionalidad del dropdown
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

    // Marcar estado seleccionado
    const links = document.querySelectorAll('nav ul li a');

    // Marcar el estado seleccionado
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Desmarcar la clase active cuando la pestaña pierde el foco
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            links.forEach(link => {
                link.classList.remove('active');
            });
        }
    });

    // Funcionalidad del acordeón
    const acordeones = document.querySelectorAll('.btn-acordeon');

    acordeones.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            // Cierra todos los acordeones
            acordeones.forEach(cb => {
                if (cb !== checkbox) {
                    cb.checked = false; // Desmarca los otros acordeones
                }
            });
        });
    });
});
