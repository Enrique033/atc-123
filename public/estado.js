document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('nav ul li a');

    // Primero, quita la clase 'mark-status' de todos los enlaces
    links.forEach(link => {
        link.classList.remove('mark-status'); // Limpia cualquier clase activa previa
    });

    // Ahora, verifica y marca el enlace correspondiente a la URL actual
    links.forEach(link => {
        // Ignora enlaces que no tienen un destino válido
        if (link.href === "javascript:void(0);" || link.href === "#") {
            return; // Salta este enlace
        }

        // Compara solo el 'pathname'
        if (link.pathname === window.location.pathname) {
            link.classList.add('mark-status'); // Agrega la clase 'mark-status' al enlace correcto
            console.log("Clase 'mark-status' añadida a:", link.href); // Mensaje de confirmación
        }
    });
});
