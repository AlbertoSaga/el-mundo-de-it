const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir,.cerrar");

function gestionMenu(evento){
	evento.preventDefault();
	navegacion.classList.toggle("desplegado");
}

botones.forEach(function(boton){
	boton.addEventListener("click",gestionMenu);
});