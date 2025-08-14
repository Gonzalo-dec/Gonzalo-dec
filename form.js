const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
            
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';

    window.location.href = 'bienvenida.html';
});