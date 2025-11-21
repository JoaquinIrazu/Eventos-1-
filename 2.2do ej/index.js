const botonPrueba = document.getElementById("botonPrueba");

let contador = 0;
botonPrueba.addEventListener("click", function(){
    contador ++;
    alert(`hiciste ${contador} clicks`);
})