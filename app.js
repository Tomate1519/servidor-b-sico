const mensaje = document.getElementById("mensaje");
const btn = document.getElementById("btn");

mensaje.textContent = "JavaScript funcionando correctamente.";

btn.addEventListener("click", () => {
  mensaje.textContent = "¡Botón presionado!";
});
