window.onscroll = function(){miFuncion()};

var billy = document.getElementById("billy");
var billy2 = document.getElementById("billy2");

var beverly = document.getElementById("beverly");
var beverly2 = document.getElementById("beverly2");

var ben = document.getElementById("ben");
var ben2 = document.getElementById("ben2");

var richie = document.getElementById("richie");
var richie2 = document.getElementById("richie2");

var eddie = document.getElementById("eddie");
var eddie2 = document.getElementById("eddie2");

var mike = document.getElementById("mike");
var mike2 = document.getElementById("mike2");

var stanley = document.getElementById("stanley");
var stanley2 = document.getElementById("stanley2");

var distancia_billy, distancia_billy2, distancia_beverly, distancia_ben, distancia_ben2, distancia_beverly2, distancia_richie, distancia_eddie, distancia_eddie2, distancia_mike, distancia_mike2, distancia_stanley, distancia_stanley2;

function miFuncion(){
	distancia_billy = window.innerHeight - billy.getBoundingClientRect().top;
	if(distancia_billy >= 200){
		billy.classList.add("efecto-billy");
	}
	distancia_billy2 = window.innerHeight - billy2.getBoundingClientRect().top;
	if(distancia_billy2 >= 200){
		billy2.classList.add("efecto-billy2");
	}
	

	distancia_beverly = window.innerHeight - beverly.getBoundingClientRect().top;
	if(distancia_beverly >= 200){
		beverly.classList.add("efecto-beverly");
	}
	distancia_beverly2 = window.innerHeight - beverly2.getBoundingClientRect().top;
	if(distancia_beverly2 >= 200){
		beverly2.classList.add("efecto-beverly2");
	}

	distancia_ben = window.innerHeight - ben.getBoundingClientRect().top;
	if(distancia_ben >= 200){
		ben.classList.add("efecto-ben");
	}
	distancia_ben2 = window.innerHeight - ben2.getBoundingClientRect().top;
	if(distancia_ben2 >= 200){
		ben2.classList.add("efecto-ben2");
	}

	distancia_richie = window.innerHeight - richie.getBoundingClientRect().top;
	if(distancia_richie >= 200){
		richie.classList.add("efecto-richie");
	}
	distancia_richie2 = window.innerHeight - richie2.getBoundingClientRect().top;
	if(distancia_richie2 >= 200){
		richie2.classList.add("efecto-richie2");
	}


	distancia_eddie = window.innerHeight - eddie.getBoundingClientRect().top;
	if(distancia_eddie >= 200){
		eddie.classList.add("efecto-eddie");
	}
	distancia_eddie2 = window.innerHeight - eddie2.getBoundingClientRect().top;
	if(distancia_eddie2 >= 200){
		eddie2.classList.add("efecto-eddie2");
	}

	distancia_mike = window.innerHeight - mike.getBoundingClientRect().top;
	if(distancia_mike >= 200){
		mike.classList.add("efecto-mike");
	}
	distancia_mike2 = window.innerHeight - mike2.getBoundingClientRect().top;
	if(distancia_mike2 >= 200){
		mike2.classList.add("efecto-mike2");
	}

	distancia_stanley = window.innerHeight - stanley.getBoundingClientRect().top;
	if(distancia_stanley >= 200){
		stanley.classList.add("efecto-stanley");
	}
	distancia_stanley2 = window.innerHeight - stanley2.getBoundingClientRect().top;
	if(distancia_stanley2 >= 200){
		stanley2.classList.add("efecto-stanley2");
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