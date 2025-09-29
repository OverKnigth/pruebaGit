probarAtributos = function(){
    let persona = {
        nombre: "Predro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }

    console.log(persona.nombre + " " + persona.apellido);
    console.log(persona.edad);
    if(persona.estaVivo == false){
        console.log("La persona esta muerta");
    } else{
        console.log("La persona esta viva");
    }
}