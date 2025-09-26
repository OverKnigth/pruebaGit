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

obtenerProvincia = function(placa){
    let provincia = "";
    if(placa.charAt(0) == "A"){
        provincia = "Azuay";
    }
    if(placa.charAt(0) == "B"){
        provincia = "Bolivar";
    }
    if(placa.charAt(0) == "U"){
        provincia = "Cañar";
    }
    if(placa.charAt(0) == "C"){
        provincia = "Carchi";
    }
    if(placa.charAt(0) == "X"){
        provincia = "Cotopaxi";
    }
    if(placa.charAt(0) == "H"){
        provincia = "Chimborazo";
    }
    if(placa.charAt(0) == "O"){
        provincia = "El Oro";
    }
    if(placa.charAt(0) == "E"){
        provincia = "Esmeraldas";
    }
    if(placa.charAt(0) == "W"){
        provincia = "Galápagos";
    }
    if(placa.charAt(0) == "G"){
        provincia = "Guayas";
    }
    if(placa.charAt(0) == "I"){
        provincia = "Imbabura";
    }
    if(placa.charAt(0) == "L"){
        provincia = "Loja";
    }
    if(placa.charAt(0) == "R"){
        provincia = "Los Rios";
    }
    if(placa.charAt(0) == "M"){
        provincia = "Manabi";
    }
    if(placa.charAt(0) == "V"){
        provincia = "Morona Santiago";
    }
    if(placa.charAt(0) == "N"){
        provincia = "Napo";
    }
    if(placa.charAt(0) == "S"){
        provincia = "Pastaza";
    }
    if(placa.charAt(0) == "P"){
        provincia = "Pichincha";
    }
    if(placa.charAt(0) == "K"){
        provincia = "Sucumbios";
    }
    if(placa.charAt(0) == "Q"){
        provincia = "Orellana";
    }
    if(placa.charAt(0) == "T"){
        provincia = "Tungurahua";
    }
    if(placa.charAt(0) == "Z"){
        provincia = "Zamora Chinchipe";
    }
    if(placa.charAt(0) == "Y"){
        provincia = "Santa Elena";
    }
    if(provincia == ""){
        provincia = null;
    }
    return provincia;
}
