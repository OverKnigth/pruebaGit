validarEstructura = function(placa){
    let hayError = false;
    let letra = placa.length - 1;
    let ultimoDigito = placa.charAt(letra);

    if(placa.length <= 6 || placa.length >=9){
        mostrarTexto("lblError1", "La placa debe tener 7 o 8 caracteres");
        hayError = true;
    }
    if(esMayuscula(placa.charAt(0)) == false || esMayuscula(placa.charAt(1)) == false || esMayuscula(placa.charAt(2)) == false){
        mostrarTexto("lblError2", "La placa debe comenzar con 3 letras mayusculas");
        hayError = true;
    }
    if(esGuion(placa.charAt(3)) == false){
        mostrarTexto("lblError3", "La placa debe contener un guion en el cuarto caracter");
        hayError = true;
    }
    if(esDigito(placa.charAt(4)) == false || esDigito(placa.charAt(5)) == false || esDigito(placa.charAt(6)) == false){
        mostrarTexto("lblError4", "La placa debe contener 3 o 4 digitos, despues del guion");
        hayError = true;
    }
    if(esDigito(ultimoDigito) == false){
        mostrarTexto("lblError5", "La placa debe terminar con un digito");
        hayError = true;
    }
    if(hayError == false){
        mostrarTexto("lblError1", "");
        mostrarTexto("lblError2", "");
        mostrarTexto("lblError3", "");
        mostrarTexto("lblError4", "");
        mostrarTexto("lblError5", "");
    }

    return !hayError;
}

