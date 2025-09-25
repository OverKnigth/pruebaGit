calcularValorTotal = function () {
    let nombreProducto;
    let precioProducto; 
    let cantidad;

    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    nombreProducto = recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");

    if(esProductoValido(nombreProducto, "lblError1") & esCantidadValida(cantidad, "lblError2") & esPrecioValido(precioProducto, "lblError3")){
        //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
        valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        //5. Mostrar valorSubtotal en el componente lblSubtotal
        mostrarTexto("lblSubtotal", valorSubtotal);
        //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
        valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        //7. Mostrar el resultado en el componente lblDescuento
        mostrarTexto("lblDescuento", valorDescuento.toFixed(2));
        //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
        let baseIVA = valorSubtotal - valorDescuento;
        valorIVA = calcularIVA(baseIVA);
        //9. Mostrar el resultado en el componente lblValorIVA    
        mostrarTexto("lblValorIVA", valorIVA.toFixed(2));
        //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
        valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        //11. Mostrar el resultado en el componente lblTotal
        mostrarTexto("lblTotal", valorTotal.toFixed(2));   
        //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
        let mensajeFinal = "Valor a pagar por " + cantidad + " " + nombreProducto + " con " + valorDescuento.toFixed(2) + "% de descuento: USD " + valorTotal.toFixed(2); 
        mostrarTexto("lblResumen", mensajeFinal);
    } else{
        limpiar();
    }

}
limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTextoEnCaja("txtCantidad", "0");
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "");
}

esProductoValido = function(nombre, idComponenteError){
    let hayErrores = false;
    if(nombre == null || nombre.length == 0){
        mostrarTexto(idComponenteError, "DATO VACIO, INGRESA UN NOMBRE, ES UN CAMPO OBLIGATORIO");
        hayErrores = true;
    }
    if(nombre.length > 10){
        mostrarTexto(idComponenteError, "DATOS INCORRECTOS, EL NOMBRE NO DEBE SUPERAR LOS 10 CARACTERES");
        hayErrores = true;
    }
    if(hayErrores == false){
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}

esCantidadValida = function(cantidad, idComponenteError){
    let hayErrores = false;
    if(isNaN(cantidad)){
        mostrarTexto(idComponenteError, "DATO VACIO, INGRESA UNA CANTIDAD PERMITIDA ENTRE 0 Y 100");
        hayErrores = true;
    }
    if(cantidad < 0 || cantidad > 100){
        mostrarTexto(idComponenteError, "DATOS INCORRECTOS, INGRESA UNA CANTIDAD PERMITIDA ENTRE 0 Y 100");
        hayErrores = true;
    }
    if(hayErrores == false){
        mostrarTexto(idComponenteError, "");

    }
    return !hayErrores;
}

esPrecioValido = function(precio, idComponenteError){
    let hayErrores = false;
    if(isNaN(precio)){
        mostrarTexto(idComponenteError, "DATO VACIO, INGRESA UN PRECIO PERMITIDO ENTRE 0 Y 50");
        hayErrores = true;
    }
    if(precio < 0 || precio > 50){
        mostrarTexto(idComponenteError, "DATOS INCORRECTOS, INGRESA UN PRECIO PERMITIDO ENTRE 0 Y 50")
        hayErrores = true;
    }
    if(hayErrores == false){
        mostrarTexto(idComponenteError, "");
    }
    return !hayErrores;
}
