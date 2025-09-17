recuperarTexto = function(idComponente){
    let cmpValor = document.getElementById(idComponente);
    let valor = cmpValor.value;
    return valor;
}

saludar = function (){
    let nombre = recuperarTexto("txtSaludo");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFloat("txtEstatura");
    console.log("Hola " + nombre + " " + apellido + ", tienes " + edad + " años y mides " + estatura);
}

recuperarInt = function(idComponente){
    let cmpValorCaja = recuperarTexto(idComponente)
    let valorEntero = parseInt(cmpValorCaja);
    return valorEntero;
}

recuperarFloat = function(idComponente){
    let cmpValorCaja = recuperarTexto(idComponente)
    let valorFloat = parseFloat(cmpValorCaja);
    return valorFloat;
}