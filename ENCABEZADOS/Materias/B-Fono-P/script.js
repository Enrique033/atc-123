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

