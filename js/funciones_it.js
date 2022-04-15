window.onscroll = function(){miFuncion()};

var it = document.getElementById("it");

var distancia_it;

function miFuncion(){
	distancia_it = window.innerHeight - it.getBoundingClientRect().top;
	if(distancia_it >= 200){
		it.classList.add("efecto-it");
	}
}

const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir,.cerrar");

function gestionMenu(evento){
	evento.preventDefault();
	navegacion.classList.toggle("desplegado");
}

botones.forEach(function(boton){
	boton.addEventListener("click",gestionMenu);
}); 