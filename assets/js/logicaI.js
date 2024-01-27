// Redirige a otra página
function redirectToBiografia() {
    window.location.href = 'assets/paginas/Biografia.html';
}

// Llama a la función cuando sea necesario, por ejemplo, en respuesta a un evento clic
document.getElementById('biografia').addEventListener('click', redirectToBiografia);

function redirectToKinal() {
    window.location.href = 'assets/paginas/Kinal.html';
}

document.getElementById('kinal').addEventListener('click', redirectToKinal);
