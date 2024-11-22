document.addEventListener('DOMContentLoaded', function() {
    // Cerramos todas las secciones del acordeón al cargar la página
    var collapses = document.querySelectorAll('.collapse');
    collapses.forEach(function(collapse) {
        collapse.classList.remove('show');  // Las secciones estarán cerradas por defecto
    });

    // Agregamos un evento de click para abrir/cerrar las secciones
    var buttons = document.querySelectorAll('.btn-link');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            var targetId = button.getAttribute('onclick').match(/'([^']+)'/)[1]; // Obtenemos el id del target
            var targetElement = document.getElementById(targetId);
            
            // Llamamos a la función toggleCollapse
            toggleCollapse(targetElement);
        });
    });
});

function toggleCollapse(targetElement) {
    targetElement.classList.toggle('show');
}
