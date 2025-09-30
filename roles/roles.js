let empleados = [
    {cedula:"1714616123", nombre:"John", apellido:"Cena", sueldo:500.0},
    {cedula:"0914632123", nombre:"Luisa", apellido:"Gonzalez", sueldo:900.0},
    {cedula:"1234567890", nombre:"Juan", apellido:"Perez", sueldo:1000.0}
]
let esNuevo = false;

/* Mostrar Opciones */
mostrarOpcionEmpleado = function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
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

/* Habilitar Inputs */
ejecutarNuevo = function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}

/* Buscar Empleado */
buscarEmpleado = function(cedula){
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for(let i =0; i < empleados.length; i++){
        elementoEmpleado = empleados[i];
        if(elementoEmpleado.cedula == cedula){
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}

/* Agregar Empleado */
agregarEmpleado = function(empleado){
    let resultado = buscarEmpleado(empleado.cedula);
    let agregado = false;
    if(resultado == null){
        empleados.push(empleado);
        agregado = true;
    }
    return agregado;
}

/* Guardar */
guardar = function(){
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");
    if(cedula.length != 10 || isNaN(cedula) == true){
        mostrarTexto("lblErrorCedula", "DATOS INCORRECTOS, INGRESA UNA CEDULA VALIDA CON 10 DIGITOS");
        esNuevo = false;
    }
    if(nombre.length < 3 || contarMayusculas(nombre) == false){
        mostrarTexto("lblErrorNombre", "DATOS INCORRECTOS, INGRESA UN NOMBRE VALIDO Y EN MAYUSCULAS");
        esNuevo = false;
    }
    if(apellido.length < 3 || contarMayusculas(apellido) == false){
        mostrarTexto("lblErrorApellido", "DATOS INCORRECTOS, INGRESA UN APELLIDO VALIDO Y EN MAYUSCULAS");
        esNuevo = false;
    }
    if(sueldo < 400 || sueldo > 5000){
        mostrarTexto("lblErrorSueldo", "DATOS INCORRECTOS, INGRESA UN SUELDO VALIDO ENTRE 400 Y 5000");
        esNuevo = false;
    }

    if(esNuevo == true){
        let empleado = {};
        empleado.cedula = cedula;
        empleado.nombre = nombre;
        empleado.apellido = apellido;
        empleado.sueldo = sueldo;
        let agregado = agregarEmpleado(empleado);
        if(agregado == true){
            alert("El empleado con la cedula: " + empleado.cedula + " fue agregado");
            mostrarEmpleados();
        } else {
            alert("El empleado con la cedula: " + empleado.cedula + " ya existe");            
        }
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

