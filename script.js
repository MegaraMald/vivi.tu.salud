// Función para abrir el modal con la imagen en grande
function openModal(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('imageModal').style.display = 'flex';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Función para manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const consulta = document.getElementById('consulta').value;
    const mensaje = `Hola! Soy ${nombre}, mi teléfono es ${telefono} y mi email es ${email}. Mi consulta es: ${consulta}`;
    const url = `https://api.whatsapp.com/send?phone=5491134306604&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
});
