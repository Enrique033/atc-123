document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.main-btn');
        const submenu = dropdown.querySelector('.submenu');

        btn.addEventListener('click', function(e) {
            e.stopPropagation();
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

    // block submenú 
    window.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            const submenu = dropdown.querySelector('.submenu');
            submenu.style.display = 'none';
        });
    });
});

// función de copiado

function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
      const message = element.nextElementSibling; // Selecciona el span .copy-message al lado del ícono
      message.style.display = "inline"; // Muestra el mensaje

      setTimeout(() => {
        message.style.display = "none"; // Oculta el mensaje después de 2 segundos
      }, 2000); // El mensaje se oculta después de 2 segundos
    }).catch(err => {
      console.error("Error al copiar el enlace: ", err);
    });
}
