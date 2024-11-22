// Mostrar/Ocultar el contenido del discurso
function showSpeech(speech) {
    const selectedSpeech = document.getElementById(speech);
    
    // Ocultar o mostrar el contenido seleccionado
    if (selectedSpeech.style.display === 'block') {
        selectedSpeech.style.display = 'none'; // Ocultar si ya está visible
    } else {
        // Ocultar todos los contenidos visibles dentro de la sección padre
        const speeches = document.querySelectorAll('.speech-content');
        speeches.forEach(s => {
            s.style.display = 'none'; // Ocultar otros discursos
        });
        
        selectedSpeech.style.display = 'block'; // Mostrar el seleccionado
    }
}

// Función para copiar el contenido del texto y mostrar el mensaje
function copyText(elementId, messageId) {
    // Selecciona el texto del elemento
    var text = document.getElementById(elementId).innerText;

    // Elimina espacios extra al principio y al final de cada línea
    var cleanedText = text.replace(/^\s+|\s+$/gm, '');  
    
    // Crear un elemento temporal para copiar el texto
    var tempElement = document.createElement('textarea');
    tempElement.value = cleanedText;
    document.body.appendChild(tempElement);
    
    // Seleccionar y copiar el contenido
    tempElement.select();
    document.execCommand('copy');
    
    // Eliminar el elemento temporal
    document.body.removeChild(tempElement);
    
    // Mostrar el mensaje de confirmación
    var message = document.getElementById(messageId);
    message.style.visibility = 'visible';
    message.style.opacity = '1';  // Hacer visible el mensaje

    // Ocultar el mensaje después de 2 segundos
    setTimeout(function() {
        message.style.opacity = '0';
        message.style.visibility = 'hidden';
    }, 2000);
}
// función de regreso historico
function goBack() {
    if (document.referrer) {
        window.history.back();
    } else {
        window.location.href = '../index.html'; // URL por defecto
    }
}