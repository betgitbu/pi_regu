function validarLogin() {
  const usuario = document.getElementById('usuario').value;
  const clave = document.getElementById('clave').value;
  const mensajeError = document.getElementById('mensaje-error');

  if (usuario === '' || clave === '') {
    mensajeError.textContent = 'Por favor, completa todos los campos.';
    return false;
  }

  mensajeError.textContent = '';
  alert('Ingreso exitoso');

  // ✅ Redirigir al cuestionario
  window.location.href = 'index.html'; // Pon la ruta real de tu cuestionario

  return false; // Evita que el form se envíe de forma normal
}
