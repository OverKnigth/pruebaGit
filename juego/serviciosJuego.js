obtenerAleatorio = function () {
  let aleatorio = Math.random();
  let aleatorioMultiplicado = aleatorio * 3;
  let aleatorioEntero = parseInt(aleatorioMultiplicado);
  let valorAleatorio = aleatorioEntero + 1;
  return valorAleatorio;
};

generarElemento = function () {
  let valor = obtenerAleatorio();
  let cadena = "";
  if (valor == 1) {
    cadena = "piedra";
  }
  if (valor == 2) {
    cadena = "papel";
  }
  if (valor == 3) {
    cadena = "tijera";
  }
  return cadena;
};

determinarGanador = function (eleccionJugador1, eleccionJugador2) {
  let ganador = 0;
  if (eleccionJugador1 == eleccionJugador2) {
    ganador = 0;
  } else if (
    (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijera") ||
    (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") ||
    (eleccionJugador1 == "tijera" && eleccionJugador2 == "papel")
  ) {
    ganador = 1;
  } else {
    ganador = 2;
  }
  return ganador;
};

generarRuta = function (nombre) {
  let ruta = "";
  if (nombre == "tijera") {
    ruta = "./img/tijera.png";
  }
  if (nombre == "piedra") {
    ruta = "./img/piedra.png";
  }
  if (nombre == "papel") {
    ruta = "./img/papel.png";
  }
  return ruta;
};
