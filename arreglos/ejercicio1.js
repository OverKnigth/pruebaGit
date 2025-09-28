let notas = [];

agregarElementos = function(){
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
    console.log(notas);
}

recorrerArreglo = function(){
    let notaR = 0;
    for(let indice = 0; indice < notas.length; indice++){
        notaR = notas[indice];
        console.log(notaR);
    }
}

probarAgregar = function(){
    let notaRecuperada = recuperarFloat("txtNota");
    agregarNota(notaRecuperada);
    console.log(notas);
}

agregarNota = function(nota){
    notas.push(nota);
    console.log(notas);
}

calcularPromedio = function(){
    let sumaNotas = 0;
    let promedio = 0;
    for(let i = 0; i < notas.length; i++){
        sumaNotas += notas[i];
    }
    promedio = sumaNotas / notas.length;
    return promedio.toFixed(2);
}

ejecutarPromedio = function(){
    let promedio = calcularPromedio();
    mostrarTexto("lblPromedio", "El promedio  de las notas ingresadas es: " + promedio);
}