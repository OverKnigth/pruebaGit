ejecutarPrueba1 = function(){
    let mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejecutarPrueba2 = function(){
    let mensaje = recuperarTexto("txtCadena");
    invertirCadena(mensaje);
}

recorrerCadena = function(cadena){
    let caracter = "";
    console.log("OPCION 1");
    for(let posicion = 0; posicion < cadena.length;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("El caracter " + caracter + " esta en la posicion " + posicion);
    }
    console.log("OPCION 2");
    for(let posicion = 0; posicion <= cadena.length - 1;posicion++){
        caracter = cadena.charAt(posicion);
        console.log("El CARACTER " + caracter + " esta en la posicion " + posicion);
    }
}

invertirCadena = function(cadena){
    let resultado = "";
    let final = cadena.length - 1;
    for(let posicion = final; posicion >= 0;posicion--){
        resultado = resultado + cadena.charAt(posicion);
        mostrarTexto("lblPrueba2", resultado);
    }
    
}