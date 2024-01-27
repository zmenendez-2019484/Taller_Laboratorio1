// Redirige a otra página
function redirectToInicio() {
    window.location.href = '../../index.html';
}

// Llama a la función cuando sea necesario, por ejemplo, en respuesta a un evento clic
document.getElementById('index').addEventListener('click', redirectToInicio);

function redirectToKinal() {
    window.location.href = '../paginas/Kinal.html';
}

document.getElementById('kinal').addEventListener('click', redirectToKinal);