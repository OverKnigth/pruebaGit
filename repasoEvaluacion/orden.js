personas = [{nombre: "Marcos", edad: "18"}, 
    {nombre: "Roberto", edad: "15"}, 
    {nombre: "Kate", edad: "25"}, 
    {nombre: "Diana", edad: "12"}, 
    {nombre: "Benja", edad: "5"}]

/* Agregar Persona */
agregarPersona = function(){
    let nombre = recuperarTexto("txtNombre");
    let edad = recuperarInt("txtEdad");
    let error = "";
    if(nombre.length < 3){
        error = "El nombre debe tener al menos 3 caracteres";
    } else if(edad < 0 || edad > 100){
        error = "La edad debe estar entre 0 y 100";
    } else {
        nuevaPersona = {}
        nuevaPersona.nombre = nombre;
        nuevaPersona.edad = edad;
        personas.push(nuevaPersona);
        alert("PERSONA AGREGADA CORRECTAMENTE");
        mostrarPersonas();
    }
}

/* Tabla Mostrar Personas */
mostrarPersonas = function(){
    let cmpTabla = document.getElementById("divTabla");
    let elementoPersona;
    let contenidoTabla = "<table>" + "<tr>" 
    + "<th>Edad</th>"
    + "<th>Nombre</th>"
    + "</tr>"
    for(let i = 0; i < personas.length; i++){
        elementoPersona = personas[i]
        contenidoTabla += "<tr>" 
        + "<td>" + elementoPersona.edad + "</td>"
        + "<td>" + elementoPersona.nombre +"</td>"
        + "</tr>"
    }
    contenidoTabla +="</table>";
    cmpTabla.innerHTML = contenidoTabla
}

/* Encontrar Mayor */
encontrarMayor = function(){
    let personaMayor = personas[0];
    let elementoPersona;
    for(let i = 1; i < personas.length; i++){
        elementoPersona = personas[i];
        if(parseInt(elementoPersona.edad) > parseInt(personaMayor.edad)){
            personaMayor = elementoPersona
        }
    }
    return personaMayor;
}

/* Determinar Mayor */
determinarMayor = function(){
    let mayor = encontrarMayor();
    mostrarTexto("lblMayor", "La persona mayor es: " + mayor.nombre + " con " + mayor.edad + " años.");
}

/* Encontrar Menor */
encontrarMenor = function(){
    let personaMenor = personas[0];
    let elementoPersona;
    for(let i = 1; i < personas.length; i++){
        elementoPersona = personas[i];
        if(parseInt(elementoPersona.edad) < parseInt(personaMenor.edad)){
            personaMenor = elementoPersona
        }
    }
    return personaMenor;
}

/* Determinar Menor */
determinarMenor = function(){
    let menor = encontrarMenor();
    mostrarTexto("lblMayor", "La persona menor es: " + menor.nombre + " con " + menor.edad + " años.");
}
