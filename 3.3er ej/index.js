const cajas = document.querySelectorAll(".contenedor div");

cajas.forEach(div => {
    div.addEventListener("click", function(){
        div.style.opacity = 0;
    })
})