calcularValorDescuento = function(monto, porcentajeDescuento){
    let calculo = (monto * porcentajeDescuento) / 100;
    return calculo;
}

calcularIVA = function(monto){
    let iva = monto * 0.12;
    return iva;
}

calcularSubtotal = function(precio, cantidad){
    let subtotal = precio * cantidad;
    return subtotal;
}

calcularTotal = function(subtotal, descuento, iva){
    let total = subtotal - descuento + iva;
    return total;
}

calcularDescuentoPorVolumen = function(subtotal, cantidad){
    let valorDescuento = 0;
    if (cantidad >= 3 && cantidad <5){
        valorDescuento = 0.03;
    } else if(cantidad >= 6 && cantidad <= 11){
        valorDescuento = 0.04;
    } else if (cantidad >= 12){
        valorDescuento = 0.05;
    }
    let descuento = subtotal * valorDescuento;
    return descuento;
}
