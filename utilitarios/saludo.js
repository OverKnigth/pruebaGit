saludar = function (){
    let nombre = recuperarTexto("txtSaludo");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let mensajeBienvenida = "hola " + nombre + " " + apellido + " tienes " + edad + " años y mides " + recuperarFloat("txtEstatura");
    mostrarTexto("lblResultado", mensajeBienvenida);
    mostrarImagen("imgSaludo", "./img/saludo.gif");
}
recuperarTexto = function(idComponente){
    let cmpValor = document.getElementById(idComponente);
    let valor = cmpValor.value;
    return valor;
}

mostrarImagen = function(idComponente, rutaImg){
    let cmpImagen = document.getElementById(idComponente);
    cmpImagen.src = rutaImg;
}

mostrarTexto = function(idComponente, mensaje){
    let cmpMensaje = document.getElementById(idComponente);
    cmpMensaje.innerHTML = mensaje;
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