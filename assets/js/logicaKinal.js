// Redirige a otra página
function redirectToInicio() {
    window.location.href = '../../index.html';
}

// Llama a la función cuando sea necesario, por ejemplo, en respuesta a un evento clic
document.getElementById('index').addEventListener('click', redirectToInicio);

// Redirige a otra página
function redirectToBiografia() {
    window.location.href = '../paginas/Biografia.html';
}

// Llama a la función cuando sea necesario, por ejemplo, en respuesta a un evento clic
document.getElementById('biografia').addEventListener('click', redirectToBiografia);