document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    // Aquí podrías agregar funcionalidad para enviar el formulario a un servido
    
    document.getElementById('form-response').innerText = 'Gracias por tu mensaje, ' + name + '. Te contactaremos pronto.';
    
    // Limpiar el formulario
    document.getElementById('contact-form').reset();
});