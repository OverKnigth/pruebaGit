saludar = function (){
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let mensajeBienvenida = "hola " + nombre + " " + apellido + " tienes " + edad + " años y mides " + recuperarFloat("txtEstatura");
    mostrarTexto("lblResultado", mensajeBienvenida);
    mostrarImagen("imgSaludo", "./img/saludo.gif");
    mostrarTextoCaja("txtNombre", "");
}
