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
        // Obtener los datos del formulario
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Validar campos requeridos
        if (!name || !email || !subject || !message) {
            throw new Error('Por favor, completa todos los campos requeridos.');
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('Por favor, ingresa un email válido.');
        }

        // Crear el enlace de email con los datos del formulario
        const emailBody = `
Nombre: ${name}
Email: ${email}
Asunto: ${subject}

Mensaje:
${message}

---
Este mensaje fue enviado desde el formulario de contacto de Matchly Sports.
        `;

        const mailtoLink = `mailto:contacto@matchlysports.com?subject=${encodeURIComponent('Nuevo contacto desde web: ' + subject)}&body=${encodeURIComponent(emailBody)}`;
        
        // Abrir el cliente de email del usuario
        window.location.href = mailtoLink;
        
        // Mostrar mensaje de éxito
        showMessage('¡Perfecto! Se abrió tu cliente de email con el mensaje pre-llenado. Solo necesitas enviarlo para completar el proceso.');
        
        // Resetear el formulario
        form.reset();
        
    } catch (error) {
        console.error('Error:', error);
        showMessage(error.message || 'Lo sentimos, hubo un error al procesar el formulario. Por favor, intenta nuevamente.', true);
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
