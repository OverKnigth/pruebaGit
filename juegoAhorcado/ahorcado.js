//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";
let intentos = 0;
let coincidencias = 0;
let errores = 0;

esMayuscula = function(caracter){
    if(caracter.charCodeAt(0) >= 65 && caracter.charCodeAt(0) <= 90){
        return true;
    } else{
        return false;

    }
}

guardarPalabra = function(){
    let palabra = recuperarTexto("txtSecreta")
    let cadena = palabra.length;
    if(cadena == 5 && contarMayusculas(palabra) == true){
        palabraSecreta = palabra;
        console.log(palabraSecreta);
    } else{
        alert("La palabra debe ser de 5 letras y todas deben ser mayusculas");
    }
}

contarMayusculas = function(cadena){
    let letra;
    let todasMayusculas = true;
    for(let i = 0; i < cadena.length; i++){
        letra = cadena.charAt(i);
        if(!esMayuscula(letra)){
            todasMayusculas = false;
        }
    }
    return todasMayusculas;
}

mostrarLetra = function(letra, posicion){
    if(posicion == 0){
        mostrarTexto("div0", letra);
    }
    if(posicion == 1){
        mostrarTexto("div1", letra);
    }
    if(posicion == 2){
        mostrarTexto("div2", letra);
    }
    if(posicion == 3){
        mostrarTexto("div3", letra);
    }
    if(posicion == 4){
        mostrarTexto("div4", letra);
    }
}

validar = function(letra){
    let letrasEncontradas = 0;
    for(let i = 0; i < palabraSecreta.length;i++){
        if(letra == palabraSecreta.charAt(i)){
            mostrarLetra(letra, i);
            letrasEncontradas++;
            coincidencias++;
        }
    }
    if(letrasEncontradas == 0){
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores++;
        mostrarAhorcado();
    }
}

ingresarLetra = function(){
    let letra = recuperarTexto("txtLetra");
    if(esMayuscula(letra) == true){
        validar(letra);
        intentos++;
        if(coincidencias == 5){
            alert("GANASTE");
            mostrarImagen("ahorcadoImagen", "ganador.gif");
        }
        if(intentos == 10){
            alert("PERDISTE");
        }
    } else{
        alert("SOLO SE ACEPTAN MAYUSCULAS");

    }
}

mostrarAhorcado = function(){
    if(errores == 1){
        mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
    }
    if(errores == 2){
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
    }
    if(errores == 3){
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png");
    }
    if(errores == 4){
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png");
    }
    if(errores == 5){
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png");
    }
    if(errores == 6){
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png");
    }
    if(errores == 7){
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png");
    }
    if(errores == 8){
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png");
    }
    if(errores == 9){
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png");
    }
    if(errores == 10){
        mostrarImagen("ahorcadoImagen", "gameOver.gif");
    }
}