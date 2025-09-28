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
    let notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
    console.log(notas);
}

agregarNota = function(nota){
    notas.push(nota);
    console.log(notas);
}