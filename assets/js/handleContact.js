// Configuración del endpoint
const API_ENDPOINT = 'http://localhost:3000/api/send-email';

// Función para mostrar mensajes al usuario
function showMessage(message, isError = false) {
    alert(message);
}

// Función para manejar el envío del formulario
async function handleSubmit(event) {
    if (!event || !event.target || !(event.target instanceof HTMLFormElement)) {
        return;
    }

    event.preventDefault();
    
    // Obtener el formulario y sus elementos
    const form = event.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('#form-submit');
    
    if (!submitButton) return;

    // Guardar texto original del botón
    const originalButtonText = submitButton.textContent;
    
    // Actualizar estado del botón
    submitButton.textContent = 'Enviando...';
    submitButton.disabled = true;

    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            })
        });

        if (response.ok) {
            showMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
            form.reset();
        } else {
            throw new Error('Error al enviar el mensaje');
        }
    } catch (error) {
        console.error('Error:', error);
        showMessage('Lo sentimos, hubo un error al enviar el mensaje. Por favor, intenta nuevamente.', true);
    } finally {
        if (submitButton) {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    }
}

// Agregar el event listener cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});
