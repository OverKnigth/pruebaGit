let frutas = ["pera", "manzana", "banana"];

probarBusqueda = function(){
    let fruta = recuperarTexto("txtFruta");
    let resultado = buscar(fruta);
    if(resultado == null){
        alert("Fruta no encontrada");
    } else{
        mostrarTexto("lblFruta", "Fruta encontrada: " + resultado + " esta en el cesto!!!");
    }
}

buscar = function(fruta){
    let elemento;
    let frutaEncontrada = null;
    for(let i = 0; i<frutas.length;i++){
        elemento = frutas[i];
        if(elemento == fruta){
            frutaEncontrada = elemento;
            break;
        }
    }
    return frutaEncontrada;
}
