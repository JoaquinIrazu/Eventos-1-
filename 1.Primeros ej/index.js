const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");

boton.addEventListener("click", function() {
  titulo.textContent = "se cambio el texto";
});

titulo.addEventListener("mouseover", function() {
  titulo.style.color = "red";
});


/*click	cuando haces clic (botón izquierdo del mouse)
dblclick	     para doble click
mousedown	     para apretar el boton del mouse hasta soltar
mouseup	         cuando se suelta el boton
mouseover	     cuando el cursor esta sobre el elemento
mouseout	     cuando el cursor se va del elemento
mousemove	     cuando se mueve el cursor dentro del elemento (tipos los brillos de los juegos)
contextmenu	     click derecho sobre elemento*/