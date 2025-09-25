validarPlaca = function(){
    let placa = recuperarTexto("txtPlaca")
    let erroresEstructura = validarEstructura(placa)
    if(erroresEstructura == !false){
        mostrarTexto("lblErrorEstructura", "Estructura Valida")
    } else{
        mostrarTexto("lblErrorEstructura", "Estructura Invalida")
    }
}