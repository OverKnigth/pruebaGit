ejecutarValidacion = function(){
    let password = recuperarTexto("txtPassword");
    let validacion = validarPassword(password);
    if(validacion == ""){
        mostrarTexto("lblValidarPassword", "Contraseña Valida");
    } else {
        mostrarTexto("lblValidarPassword", validacion);
    }
}

validarPassword = function(password){
    let error = "";
    let cadena = password.length;
    if(cadena < 8 || cadena > 16){
        error = "La contraseña debe tener entre 8 y 16 caracteres";
    }
    if(contarMayusculas(password) == false){
        error = "La contraseña debe contener al menos una mayuscula";
    }
    if(contarDigito(password) == false){
        error = "La contraseña debe contener al menos un digito";
    }
    if(contarCaracter(password) == false){
        error = "La contraseña debe contener al menos un caracter especial";
    }

    return error;
}

contarMayusculas = function(cadena){
    let letra;
    let hayMayuscula = false;
    for(i = 0; i < cadena.length; i++){
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            hayMayuscula = true;
        }
    }
    return hayMayuscula;
}

contarDigito = function(cadena){
    let digito = 0
    let hayDigito = false;
    for(let posicion = 0; posicion < cadena.length; posicion++){
        digito = cadena.charAt(posicion);
        if(esDigito(digito)){
            hayDigito = true;
        }
    }
    return hayDigito;
}

contarCaracter = function(cadena){
    let caracter;
    let hayCaracter = false;
    for(let posicion = 0; posicion < cadena.length; posicion++){
        caracter = cadena.charAt(posicion);
        if(esAsterisco(caracter)){
            hayCaracter = true;
        }
        if(esGuion(caracter)){
            hayCaracter = true;
        }
        if(esGuionBajo(caracter)){
            hayCaracter = true;
        }
    }
    return hayCaracter;
}
