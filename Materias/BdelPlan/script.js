function copyText(textId, messageId) {
    const textElement = document.getElementById(textId);
    const text = textElement.innerText.trim(); // Obtiene el texto del pre y elimina espacios en blanco al inicio y al final

    navigator.clipboard.writeText(text).then(() => {
        const message = document.getElementById(messageId);
        message.style.display = "inline";
        setTimeout(() => { message.style.display = "none"; }, 2000);
    });
}


function goBack() {
    window.history.back(); // Regresa a la página anterior
}

    // Función para mostrar la sección correspondiente al ancla
    function showSection() {
        const hash = window.location.hash;
        const sections = document.querySelectorAll('.outer-container');

        sections.forEach(section => {
            section.style.display = 'none'; // Oculta todas las secciones
        });

        if (hash) {
            const targetSection = document.querySelector(hash);
            if (targetSection) {
                targetSection.style.display = 'flex'; // Muestra la sección correspondiente
                targetSection.style.justifyContent = 'center'; // Centra el contenido
                targetSection.style.alignItems = 'center'; // Alinea verticalmente
            }
        }
    }

    window.onload = showSection;
    window.onhashchange = showSection;