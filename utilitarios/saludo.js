recuperarTexto = function(idComponente){
    let cmpValor = document.getElementById(idComponente);
    let valor = cmpValor.value;
    return valor;
}

saludar = function (){
    let nombre = recuperarTexto("txtSaludo");
    let apellido = recuperarTexto("txtApellido");
    console.log("hola " + nombre + " " + apellido);
}