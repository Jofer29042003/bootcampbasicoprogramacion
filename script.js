// Captura del formulario
document.getElementById("formContacto").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Gracias por escribirnos! Te contactaremos pronto.");
    this.reset();
});
