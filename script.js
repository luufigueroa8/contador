// guardar en una variable el valor del contador
var contador = 0


//mostar el valor del contador en el html
function mostrar(){
    //capturar el html del contador
    document.querySelector(".contador")
    //actualizar el valor del contador
    .innerHTML = contador
}

//declarar funcion sumar
function sumar(){
    contador= contador + 1
    mostrar()
}
//declarar funcion restar
function restar(){
    contador = contador - 1
    mostrar()
}

//reiniciar el contador
function reiniciar(){
    contador = 0
    mostrar()

}