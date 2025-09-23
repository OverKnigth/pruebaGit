recuperarTexto = function(idComponente){
    let cmpValor = document.getElementById(idComponente);
    let valor = cmpValor.value;
    return valor;
}

recuperarInt = function(idComponente){
    let cmpValor = recuperarTexto(idComponente);
    let valorInt = parseInt(cmpValor);
    return valorInt;
}

recuperarFloat = function(idComponente){
    let cmpValor = recuperarTexto(idComponente)
    let valorFloat = parseFloat(cmpValor);
    return valorFloat;
}

mostrarTexto = function(idComponente, mensaje){
    let componente = document.getElementById(idComponente);
    componente.innerHTML = mensaje;
}

mostrarImagen = function(idComponente, imagen){
    let componente = document.getElementById(idComponente);
    componente.src = imagen;
}

mostrarTextoCaja = function(idComponente, mensaje){
    let cmpMensaje = document.getElementById(idComponente);
    cmpMensaje.value = mensaje;
}