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
};
