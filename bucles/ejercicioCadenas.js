ejecutarPrueba1 = function(){
    let mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejecutarPrueba2 = function(){
    let mensaje = recuperarTexto("txtCadena");
    invertirCadena(mensaje);
}

ejecutarPrueba3 = function(){
    let mensaje = recuperarTexto("txtCadena");
    let letra = recuperarTexto("txtLetra");
    let resultado = buscarLetra(mensaje, letra);
    mostrarTexto("lblPrueba2", resultado);
}

ejecutarPrueba4 = function(){
    let mensaje = recuperarTexto("txtCadena");
    contarMayusculas(mensaje);
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

buscarLetra = function(cadena, letra){
    let caracter;
    let existeLetra = false;
    for(let posicion = 0; posicion < cadena.length;posicion++){
        caracter = cadena.charAt(posicion);
        if(caracter == letra){
            existeLetra = true;
        }
    }
    if(existeLetra == true){
        return true;
    } else{
        return false;
    }
}

contarMayusculas = function(cadena){
    let letra;
    let contadorMayusculas = 0;
    for(i = 0; i < cadena.length; i++){
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }
    }
    console.log("Hay " + contadorMayusculas + " mayusculas en la cadena");

}