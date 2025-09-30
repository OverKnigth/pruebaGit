let empleados = [
    {cedula:"1714616123", nombre:"John", apellido:"Cena", sueldo:500.0},
    {cedula:"0914632123", nombre:"Luisa", apellido:"Gonzalez", sueldo:900.0},
    {cedula:"1234567890", nombre:"Juan", apellido:"Perez", sueldo:1000.0}
]

/* Mostrar Opciones */
mostrarOpcionEmpleado = function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

mostrarOpcionRol = function(){
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function(){
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
}

/* Mostrar Empleados: Tabla*/
mostrarEmpleados = function(){
    let cmpTabla = document.getElementById("tablaEmpleados");
    let elementoEmpleado;
    let contenidoTabla = "<table><tr>"
    + "<th>Cedula</th>"
    + "<th>Nombre</th>"
    + "<th>Apellido</th>"
    + "<th>Sueldo</th>"
    + "</tr>"
    for(let i = 0; i < empleados.length;i++){
        elementoEmpleado = empleados[i];
        contenidoTabla += "<tr>"
        + "<td>"+ elementoEmpleado.cedula +"</td>"
        + "<td>"+ elementoEmpleado.nombre +"</td>"
        + "<td>"+ elementoEmpleado.apellido +"</td>"
        + "<td>"+ elementoEmpleado.sueldo +"</td>"
        + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}
