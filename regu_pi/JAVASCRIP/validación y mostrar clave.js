function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;
  const mensaje = document.getElementById("mensaje-error");

  if (usuario === "voluntario" && clave === "cancer123") {
    alert("¡Bienvenido a la plataforma de apoyo contra el cáncer!");
    return true;
  } else {
    mensaje.textContent = "Usuario o contraseña incorrectos";
    return false;
  }
}
