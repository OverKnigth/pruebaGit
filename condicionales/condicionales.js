calcularTasaInteres = function (ingresoAnual) {
  let tasaInteres = 0;
  if (ingresoAnual < 300000) {
    tasaInteres = 16;
  } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
    tasaInteres = 15;
  } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
    tasaInteres = 14;
  } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
    tasaInteres = 13;
  } else if (ingresoAnual >= 2000000) {
    tasaInteres = 12;
  }
  return tasaInteres;
};

ejecutarTasaInteres = function () {
  let ingresoAnual = recuperarFloat("txtIngresos");
  let tasaInteres = calcularTasaInteres(ingresoAnual);
  mostrarTexto("lblTasaInteres", "La tasa de interes es de: " + tasaInteres + "%");
};

calcularCapacidadPago = function (edad, ingresos, egresos) {
  let capacidadPago = 0;
  if (edad > 50) {
    capacidadPago = (ingresos - egresos) * 0.3;
  } else if (edad <= 50) {
    capacidadPago = (ingresos - egresos) * 0.4;
  }
  return capacidadPago;
};

ejecutarCapacidadPago = function(){
    let edad = recuperarInt("txtEdad");
    let ingresos = recuperarFloat("txtIngresosDos");
    let egresos = recuperarFloat("txtEgresos");
    let capacidadPago = calcularCapacidadPago(edad, ingresos, egresos);
    mostrarTexto("lblCapacidadPago", "La capacidad de pago es de: " + capacidadPago);
}

calcularDescuento = function (precio, cantidad) {
  let descuento = 0;
  if (cantidad >= 3 && cantidad <= 5) {
    descuento = 0.02;
  } else if (cantidad >= 6 && cantidad <= 11) {
    descuento = 0.03;
  } else if (cantidad >= 12) {
    descuento = 0.04;
  }
  let subtotal = precio * cantidad;
  let valorFinal = subtotal - subtotal * descuento;
  return valorFinal;
};

ejecutarDescuento = function(){
    let precio = recuperarFloat("txtPrecio");
    let cantidad = recuperarInt("txtCantidad");
    let precioFinal = calcularDescuento(precio, cantidad);
    let precioPagar = precioFinal.toFixed(2);
    mostrarTexto("lblDescuento", "El precio a pagar es de: " + precioPagar);
}

determinarColesterolLDL = function (nivelColesterol) {
  let categoria = "";
  if (nivelColesterol < 100.0) {
    categoria = "Nivel de Colesterol LDL saludable";
  } else if (nivelColesterol >= 100.0 && nivelColesterol < 110.0) {
    categoria = "Nivel de Colesterol LDL ligeramente alto";
  } else if (nivelColesterol >= 110.0 && nivelColesterol < 130.0) {
    categoria = "Nivel de Colesterol LDL límite alto";
  } else {
    categoria = "Nivel de Colesterol LDL alto";
  }
  return categoria;
};

ejecutarColesterolLDL = function(){
    let nivelColesterol = recuperarFloat("txtColesterol");
    let categoria = determinarColesterolLDL(nivelColesterol);
    mostrarTexto("lblColesterol", categoria);
}

validarClave = function(clave){
    if(clave.length >= 8 && clave.length <= 16){
        return true;
    } else {
        return false;

    }
}

ejecutarValidarClave = function(){
    let clave = recuperarTexto("txtClave");
    let validacion = validarClave(clave);
    if(validacion == true){
        mostrarTexto("lblValidarClave", "Clave Valida");
    } else {
        mostrarTexto("lblValidarClave", "Clave Invalida");
    }
}

esMayuscula = function(caracterM){
    if(caracterM.charCodeAt(0) >= 65 && caracterM.charCodeAt(0) <= 90){
        return true;
    } else {
        return false;
    }
}

ejecutarMayuscula = function(){
    let caracter = recuperarTexto("txtMayuscula");
    let resultado = esMayuscula(caracter);
    if(resultado == true){
        mostrarTexto("lblValidarMayuscula", "Es una letra Mayuscula");
    } else {
        mostrarTexto("lblValidarMayuscula", "No es una letra Mayuscula");
    }
}

esMinuscula = function(caracterN){
    if(caracterN.charCodeAt(0) >= 97 && caracterN.charCodeAt(0) <= 122){
        return true;
    } else {
        return false;
    }
}

ejecutarMinuscula = function(){
    let caracter = recuperarTexto("txtMinuscula");
    let resultado = esMinuscula(caracter);
    if(resultado == true){
        mostrarTexto("lblValidarMinuscula", "Es una letra Minuscula");
    } else {
        mostrarTexto("lblValidarMinuscula", "No es una letra Minuscula");
    }
}

esDigito = function(caracterD){
    if(caracterD.charCodeAt(0) >= 48 && caracterD.charCodeAt(0) <= 57){
        return true;
    } else {
        return false;
    }
}

ejecutarDigito = function(){
    let caracter = recuperarTexto("txtDigito");
    let resultado = esDigito(caracter);
    if(resultado == true){
        mostrarTexto("lblValidarDigito", "Es un Digito");
    } else {
        mostrarTexto("lblValidarDigito", "No es un Digito");
    }
}

darPermiso = function(notaMate, notaFisica, notaGeometria){
    if(notaMate > 90 || notaFisica > 90 || notaGeometria > 90){
        return true;
    } else {
        return false;

    }
}

ejecutarPermiso = function(){
    let notaMatematica = recuperarFloat("txtMatematica");
    let notaFisica = recuperarFloat("txtFisica");
    let notaGeometria = recuperarFloat("txtGeometria");
    let tienePermiso = darPermiso(notaMatematica, notaFisica, notaGeometria);
    if(tienePermiso == true){
        mostrarTexto("lblPermiso", "Tiene Permiso");    
    } else {
        mostrarTexto("lblPermiso", "No Tiene Permiso");
    }
}

otorgarPermiso = function(notaMate, notaFisica, notaGeometria){
    if(notaMate > 90 || notaFisica > 90 && notaGeometria > 80){
        return true;
    } else {
        return false;

    }
}

ejecutarOtorgarPermiso = function(){
    let notaMatematica = recuperarFloat("txtMatematica2");
    let notaFisica = recuperarFloat("txtFisica2");
    let notaGeometria = recuperarFloat("txtGeometria2");
    let tienePermiso = otorgarPermiso(notaMatematica, notaFisica, notaGeometria);
    if(tienePermiso == true){
        mostrarTexto("lblOtorgarPermiso", "Tiene Permiso");    
    } else {
        mostrarTexto("lblOtorgarPermiso", "No Tiene Permiso");
    }
}

dejarSalir = function(notaMate, notaFisica, notaGeometria){
    if((notaMate > 90 || notaFisica > 90 || notaGeometria > 90) && notaFisica > notaMate){
        return true;
    } else {
        return false;
    }
}

ejecutarDejarSalir = function(){
    let notaMatematica = recuperarFloat("txtMatematica3");
    let notaFisica = recuperarFloat("txtFisica3");
    let notaGeometria = recuperarFloat("txtGeometria3");
    let tienePermiso = dejarSalir(notaMatematica, notaFisica, notaGeometria);
    if(tienePermiso == true){
        mostrarTexto("lblDejarSalir", "Tiene Permiso");    
    } else {
        mostrarTexto("lblDejarSalir", "No Tiene Permiso");
    }
}
