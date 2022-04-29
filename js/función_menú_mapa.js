/* Botón Menú */

const navegacion = document.querySelector("nav"); /* Seleccionamos el primer elemento que coincida con el CSS */
const botones = document.querySelectorAll(".abrir,.cerrar"); /* Seleccionamos el primer elemento que coincida con el CSS */

function gestionMenu(evento){
	evento.preventDefault(); /* Cancela el evento si se puede cancelar y puede ser llamado de nuevo */
	navegacion.classList.toggle("desplegado"); /* Accedemos a la lista de clases del elemento.
	Cuando sólo hay un argumento presente: Alterna el valor de la clase */
}

botones.forEach(function(boton){ /* Ejecuta la función indicada una vez por cada elemento */
	boton.addEventListener("click",gestionMenu); /* Le decimos al elemento que en caso de que suceda el evento 'click'
	se ejecute la función en respuesta a dicho evento */
}); 