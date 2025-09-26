mostrarNumeros = function () {
  console.log("antes del for");
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log("despues del for");
};

mostrarNumeros2 = function () {
  console.log("antes del for");
  for (let indice = 1; indice <= 10; indice++) {
    console.log(indice);
  }
  console.log("despues del for");
};

mostrarPares = function () {
  console.log("antes del for");
  for(let x = 2; x <= 10; x+=2){
    console.log(x);
  }
  console.log("despues del for");
};

mostrarInversa = function(){
  console.log("antes del for");
  for(let x = 10; x >= 0; x--){
    console.log(x);

  }
  console.log("despues del for");
}

hackearNasa = function(){
  console.log("antes del for");
  for(let porcentaje = 0; porcentaje <= 100; porcentaje +=10){
    console.log("Hackeando a la Nasa "+porcentaje +"%");
  }
  console.log("La nasa ha sido hackeada con exito xD");
  console.log("despues del for");
}

mostrarImpares = function(){
    console.log("antes del for");
    for(let impar = 1;impar <= 21; impar+=2){
        console.log(impar);
    }
    console.log("despues del for");
}
