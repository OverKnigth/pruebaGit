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
    mostrarNotas();
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

generarTabla = function(){
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>UNO</td></tr>" + "<tr><td>DOS</td></tr></table>"
    cmpTabla.innerHTML = contenidoTabla;
}

mostrarNotas = function(){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>Notas</th></tr>"
    let miNota;
    for(let i = 0; i < notas.length; i++){
        miNota = notas[i];
        contenidoTabla += "<tr><td>" 
        contenidoTabla += miNota 
        contenidoTabla += "</td></tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
