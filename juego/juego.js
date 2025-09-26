let puntosUsuario = 0;
let puntosComputadora = 0;

jugar = function (seleccionado) {
  let elemento = generarElemento();
  let img = generarRuta(elemento);
  mostrarImagen("imgComputadora", img);
  let ganador = determinarGanador(seleccionado, elemento);
  if (ganador == 1) {
    mostrarTexto("lblResultado", "GANASTE LA PARTIDA");
    puntosUsuario = puntosUsuario + 1;
  }
  if (ganador == 2) {
    mostrarTexto("lblResultado", "PERDISTE LA PARTIDA");
    puntosComputadora = puntosComputadora + 1;
  }
  if (ganador == 0) {
    mostrarTexto("lblResultado", "EMPATE");
  }
  mostrarTexto("lblPuntajeUsuario", puntosUsuario);
  mostrarTexto("lblPuntajeComputadora", puntosComputadora);

  if(puntosUsuario == 5){
    mostrarTexto("lblGanador", "GANASTE EL JUEGO");
    limpiar();
  }
  if(puntosComputadora == 5){
    mostrarTexto("lblGanador", "PERDISTE EL JUEGO");
    limpiar();
  }

};

limpiar = function(){
    mostrarTexto("lblResultado", "");
    mostrarImagen("imgComputadora", "");
    mostrarTexto("lblPuntajeUsuario", "0");
    mostrarTexto("lblPuntajeComputadora", "0");
    puntosComputadora = 0;
    puntosUsuario = 0;
}