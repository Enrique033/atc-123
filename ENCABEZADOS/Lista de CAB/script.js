// Obtenemos los elementos select
const departamentoFilter = document.getElementById('departamento-filter');
const provinciaFilter = document.getElementById('provincia-filter');
const distritoFilter = document.getElementById('distrito-filter');

// Guardamos la tabla
const rows = document.querySelectorAll('#cab-table tbody tr');

// Cargamos las opciones iniciales en los selects
function cargarOpciones() {
    const departamentos = new Set();
    const provincias = new Map();
    const distritos = new Map();

    // Recorremos las filas de la tabla
    rows.forEach(row => {
        const departamento = row.cells[2].textContent.trim();
        const provincia = row.cells[3].textContent.trim();
        const distrito = row.cells[4].textContent.trim();

        // Agregamos el departamento al conjunto
        departamentos.add(departamento);

        // Agregamos las provincias relacionadas al departamento
        if (!provincias.has(departamento)) {
            provincias.set(departamento, new Set());
        }
        provincias.get(departamento).add(provincia);

        // Agregamos los distritos relacionados a la provincia
        if (!distritos.has(provincia)) {
            distritos.set(provincia, new Set());
        }
        distritos.get(provincia).add(distrito);
    });

    // Cargamos las opciones de departamentos
    departamentos.forEach(dep => {
        const option = document.createElement('option');
        option.value = dep;
        option.textContent = dep;
        departamentoFilter.appendChild(option);
    });

    // Evento al cambiar el Departamento
    departamentoFilter.addEventListener('change', function () {
        // Reiniciamos las opciones de provincias y distritos
        provinciaFilter.innerHTML = '<option value="">Todos</option>';
        distritoFilter.innerHTML = '<option value="">Todos</option>';
        distritoFilter.disabled = true;

        if (this.value) {
            // Cargamos las provincias relacionadas
            provincias.get(this.value).forEach(prov => {
                const option = document.createElement('option');
                option.value = prov;
                option.textContent = prov;
                provinciaFilter.appendChild(option);
            });
            provinciaFilter.disabled = false;
        } else {
            provinciaFilter.disabled = true;
            distritoFilter.disabled = true;
        }

        filtrarTabla();
    });

    // Evento al cambiar la Provincia
    provinciaFilter.addEventListener('change', function () {
        // Reiniciamos las opciones de distritos
        distritoFilter.innerHTML = '<option value="">Todos</option>';

        if (this.value) {
            // Cargamos los distritos relacionados
            distritos.get(this.value).forEach(dist => {
                const option = document.createElement('option');
                option.value = dist;
                option.textContent = dist;
                distritoFilter.appendChild(option);
            });
            distritoFilter.disabled = false;
        } else {
            distritoFilter.disabled = true;
        }

        filtrarTabla();
    });

    // Evento al cambiar el Distrito
    distritoFilter.addEventListener('change', filtrarTabla);
}

// Función para filtrar la tabla según los filtros seleccionados
function filtrarTabla() {
    const departamento = departamentoFilter.value;
    const provincia = provinciaFilter.value;
    const distrito = distritoFilter.value;

    rows.forEach(row => {
        const rowDepartamento = row.cells[2].textContent.trim();
        const rowProvincia = row.cells[3].textContent.trim();
        const rowDistrito = row.cells[4].textContent.trim();

        const mostrar =
            (!departamento || rowDepartamento === departamento) &&
            (!provincia || rowProvincia === provincia) &&
            (!distrito || rowDistrito === distrito);

        row.style.display = mostrar ? '' : 'none';
    });
}

// Inicializamos las opciones de los filtros
cargarOpciones();

// Interactividad con el H1
const headerContainer = document.querySelector('.header-container');

// Añadir la clase de animación al cargar la página
window.addEventListener('load', () => {
    headerContainer.classList.add('animate');
});

// Eliminar la clase de animación al pasar el mouse
headerContainer.addEventListener('mouseenter', () => {
    headerContainer.classList.remove('animate');
});

// Restaurar la animación al salir del mouse
headerContainer.addEventListener('mouseleave', () => {
    headerContainer.classList.add('animate');
});


// función de regreso historico
function goBack() {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = '../index.html'; // URL por defecto
    }
}