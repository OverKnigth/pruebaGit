//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
palabraSecreta = "";

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