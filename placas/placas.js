validarPlaca = function(){
    let placa = recuperarTexto("txtPlaca")
    let erroresEstructura = validarEstructura(placa)
    if(erroresEstructura == !false){
        mostrarTexto("lblErrorEstructura", "Estructura Valida")
        let provincia = obtenerProvincia(placa)
        if(provincia == null){
            mostrarTexto("lblProvincia", "Provincia Incorrecta")
        } else{
            mostrarTexto("lblProvincia", provincia)
        }
        let vehiculo = obtenerTipoVehiculo(placa)
        mostrarTexto("lblVehiculo", vehiculo)
    } else{
        mostrarTexto("lblErrorEstructura", "Estructura Invalida")
    }
}