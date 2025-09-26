validarPlaca = function(){
    let placa = recuperarTexto("txtPlaca")
    let erroresEstructura = validarEstructura(placa)
    if(erroresEstructura == !false){
        mostrarTexto("lblEstructuraValida", "Estructura Valida")
        mostrarTexto("lblDatos", "Datos:")
        let provincia = obtenerProvincia(placa)
        if(provincia == null){
            mostrarTexto("lblProvincia", "Provincia Incorrecta")
        } else{
            mostrarTexto("lblProvincia", "Provincia: " +provincia)
        }
        let vehiculo = obtenerTipoVehiculo(placa)
        mostrarTexto("lblVehiculo", " Tipo de Vehiculo: " + vehiculo)
        let dia = obtenerDiaPicoYPlaca(placa)
        mostrarTexto("lblPicoYPlaca", " Dia de Pico y Placa: " + dia)
    } else{
        mostrarTexto("lblEstructuraInvalida", "Estructura Invalida")
    }
}

limpiar = function(){
    mostrarTexto("lblEstructuraValida", "")
    mostrarTexto("lblEstructuraInvalida", "")
    mostrarTexto("lblDatos", "")
    mostrarTexto("lblProvincia", "")
    mostrarTexto("lblVehiculo", "")
    mostrarTexto("lblPicoYPlaca", "")
    mostrarTextoEnCaja("txtPlaca", "")
    mostrarTexto("lblError1", "")
    mostrarTexto("lblError2", "")
    mostrarTexto("lblError3", "")
    mostrarTexto("lblError4", "")
    mostrarTexto("lblError5", "")
}