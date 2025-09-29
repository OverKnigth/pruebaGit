numeroAleatorio = function(){
    let aleatorio = Math.random();
    let aleatorioMultiplicado = aleatorio * 100;
    let aleatorioEntero = parseInt(aleatorioMultiplicado);
    let valorAleatorio = aleatorioEntero + 1;
    return valorAleatorio;
}

generarAleatorios = function(){
    let aleatorios = [];
    let numeroIngresado = recuperarInt("txtNumero");

    if(numeroIngresado >= 5 && numeroIngresado <= 20){
        for(let i = 0; i < numeroIngresado; i++){
            let numero = numeroAleatorio();
            aleatorios.push(numero);
            console.log(i);
            console.log(aleatorios);
        }
        mostrarResultados(aleatorios);
    } else {
        alert("El número debe estar entre 5 y 20");
    }
}

mostrarResultados = function(arregloNumeros){
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>Numeros Aleatorios:</th></tr>"
    let numeros;
    for(let i = 0; i < arregloNumeros.length; i++){
        numeros = arregloNumeros[i];
        contenidoTabla += "<tr><td>" 
        contenidoTabla += numeros 
        contenidoTabla += "</td></tr>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}