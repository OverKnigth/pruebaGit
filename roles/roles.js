let empleados = [
  { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
  {
    cedula: "0914632123",
    nombre: "Luisa",
    apellido: "Gonzalez",
    sueldo: 900.0,
  },
  { cedula: "1234567890", nombre: "Juan", apellido: "Perez", sueldo: 1000.0 },
];
let esNuevo = false;
let roles = [];

/* Mostrar Opciones */
mostrarOpcionEmpleado = function () {
  mostrarComponente("divEmpleado");
  ocultarComponente("divRol");
  ocultarComponente("divResumen");
  mostrarEmpleados();
  deshabilitar();
};

mostrarOpcionRol = function () {
  mostrarComponente("divRol");
  ocultarComponente("divEmpleado");
  ocultarComponente("divResumen");
  deshabilitarComponente("btnGuardarRol");
  mostrarRoles();
};

mostrarOpcionResumen = function () {
  mostrarComponente("divResumen");
  ocultarComponente("divRol");
  ocultarComponente("divEmpleado");
};

/* Mostrar Empleados: Tabla*/
mostrarEmpleados = function () {
  let cmpTabla = document.getElementById("tablaEmpleados");
  let elementoEmpleado;
  let contenidoTabla =
    "<table><tr>" +
    "<th>Cedula</th>" +
    "<th>Nombre</th>" +
    "<th>Apellido</th>" +
    "<th>Sueldo</th>" +
    "</tr>";
  for (let i = 0; i < empleados.length; i++) {
    elementoEmpleado = empleados[i];
    contenidoTabla +=
      "<tr>" +
      "<td>" +
      elementoEmpleado.cedula +
      "</td>" +
      "<td>" +
      elementoEmpleado.nombre +
      "</td>" +
      "<td>" +
      elementoEmpleado.apellido +
      "</td>" +
      "<td>" +
      elementoEmpleado.sueldo +
      "</td>" +
      "</tr>";
  }
  contenidoTabla += "</table>";
  cmpTabla.innerHTML = contenidoTabla;
};

/* Habilitar Inputs */
ejecutarNuevo = function () {
  habilitar();
  esNuevo = true;
};

/* Buscar Empleado */
buscarEmpleado = function (cedula) {
  let elementoEmpleado;
  let empleadoEncontrado = null;
  for (let i = 0; i < empleados.length; i++) {
    elementoEmpleado = empleados[i];
    if (elementoEmpleado.cedula == cedula) {
      empleadoEncontrado = elementoEmpleado;
      break;
    }
  }
  return empleadoEncontrado;
};

/* Agregar Empleado */
agregarEmpleado = function (empleado) {
  let resultado = buscarEmpleado(empleado.cedula);
  let agregado = false;
  if (resultado == null) {
    empleados.push(empleado);
    agregado = true;
  }
  return agregado;
};

/* Guardar */
guardar = function () {
  let cedula = recuperarTexto("txtCedula");
  let nombre = recuperarTexto("txtNombre");
  let apellido = recuperarTexto("txtApellido");
  let sueldo = recuperarFloat("txtSueldo");
  let empleadoEncontrado = buscarEmpleado(cedula);
  if (cedula.length != 10 || isNaN(cedula) == true) {
    mostrarTexto(
      "lblErrorCedula",
      "DATOS INCORRECTOS, INGRESA UNA CEDULA VALIDA CON 10 DIGITOS"
    );
    esNuevo = false;
  }
  if (nombre.length < 3 || contarMayusculas(nombre) == false) {
    mostrarTexto(
      "lblErrorNombre",
      "DATOS INCORRECTOS, INGRESA UN NOMBRE VALIDO Y EN MAYUSCULAS"
    );
    esNuevo = false;
  }
  if (apellido.length < 3 || contarMayusculas(apellido) == false) {
    mostrarTexto(
      "lblErrorApellido",
      "DATOS INCORRECTOS, INGRESA UN APELLIDO VALIDO Y EN MAYUSCULAS"
    );
    esNuevo = false;
  }
  if (sueldo < 400 || sueldo > 5000) {
    mostrarTexto(
      "lblErrorSueldo",
      "DATOS INCORRECTOS, INGRESA UN SUELDO VALIDO ENTRE 400 Y 5000"
    );
    esNuevo = false;
  }

  if (esNuevo == true) {
    let empleado = {};
    empleado.cedula = cedula;
    empleado.nombre = nombre;
    empleado.apellido = apellido;
    empleado.sueldo = sueldo;
    let agregado = agregarEmpleado(empleado);
    esNuevo = false;
    if (agregado == true) {
      alert("El empleado con la cedula: " + empleado.cedula + " fue agregado");
      mostrarEmpleados();
    } else {
      alert("El empleado con la cedula: " + empleado.cedula + " ya existe");
    }
  } else{
    if(empleadoEncontrado != null){
        empleadoEncontrado.nombre = nombre;
        empleadoEncontrado.apellido = apellido;
        empleadoEncontrado.sueldo = sueldo;
        alert("El empleado con la cedula: " + empleadoEncontrado.cedula + " fue modificado");
        mostrarEmpleados();
        deshabilitar();
    }
  }
};

contarMayusculas = function (cadena) {
  let letra;
  let todasMayusculas = true;
  for (let i = 0; i < cadena.length; i++) {
    letra = cadena.charAt(i);
    if (!esMayuscula(letra)) {
      todasMayusculas = false;
    }
  }
  return todasMayusculas;
};

/* Deshabilitar y Habilitiar Inputs */
deshabilitar = function () {
  deshabilitarComponente("txtCedula");
  deshabilitarComponente("txtNombre");
  deshabilitarComponente("txtApellido");
  deshabilitarComponente("txtSueldo");
  deshabilitarComponente("btnGuardar");
};

habilitar = function () {
  habilitarComponente("txtCedula");
  habilitarComponente("txtNombre");
  habilitarComponente("txtApellido");
  habilitarComponente("txtSueldo");
  habilitarComponente("btnGuardar");
};

/* Ejecutar Busqueda */
ejecutarBusqueda = function () {
  let cedula = recuperarTexto("txtBusquedaCedula");
  let resultado = buscarEmpleado(cedula);
  if (resultado == null) {
    alert("El empleado con la cedula: " + cedula + " no existe.");
  } else {
    mostrarTextoEnCaja("txtCedula", resultado.cedula);
    mostrarTextoEnCaja("txtNombre", resultado.nombre);
    mostrarTextoEnCaja("txtApellido", resultado.apellido);
    mostrarTextoEnCaja("txtSueldo", resultado.sueldo);
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    deshabilitarComponente("txtCedula");
  }
};

/* Limpiar */
limpiar = function(){
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    esNuevo = false;
    deshabilitar();
}

/* Buscar por Rol */
buscarPorRol = function(){
  let cedula = recuperarTexto("txtBusquedaCedulaRol");
  let resultado = buscarEmpleado(cedula);
  if (resultado == null) {
    alert("El empleado con la cedula: " + cedula + " no existe.");
  } else {
    mostrarTexto("infoCedula", resultado.cedula);
    mostrarTexto("infoNombre", resultado.nombre + " " + resultado.apellido);
    mostrarTexto("infoSueldo", resultado.sueldo);
  }
}

/* Calcular Aporte Empleado */
calcularAporteEmpleado = function(sueldo){
  let aporte = sueldo * 0.0945;
  return aporte;
}

/* Calcular Valor a Pagar */
calcularValorAPagar = function(sueldo, iess, descuento){
  let valorPagar = sueldo - iess - descuento;
  return valorPagar;
}

/* Calcular Rol */
calcularRol = function(){
  let sueldo = recuperarTextoDiv("infoSueldo");
  let descuentos = recuperarFloat("txtDescuentos");
  if(descuentos < 0 || descuentos > sueldo){
    alert("El descuento debe ser mayor a 0 y menor o igual al sueldo.");
  } else{
    let aporte = calcularAporteEmpleado(sueldo);
    let valorPagar = calcularValorAPagar(sueldo, aporte, descuentos);
    mostrarTexto("infoIESS", aporte);
    mostrarTexto("infoPago", valorPagar);
    habilitarComponente("btnGuardarRol");
  }
}

/* Buscar Rol */
buscarRol = function(cedula){
  let resultado = null;
  for(let i =0; i < roles.length; i++){
    resultado = roles[i];
    if(resultado.cedula == cedula){
      return resultado;
    }
  }
  return resultado;
}

/* Agregar Rol */
agregarRol = function(rol){
  let buscarEmpleado = buscarRol(rol.cedula);
  if(buscarEmpleado == null){
    roles.push(rol);
  } else{
    alert("El empleado con la cedula: " + rol.cedula + " ya tiene un rol.");
  }
}

/* Calcular Aporte Empleador */
calcularAporteEmpleador = function(sueldo){
  let aporte = sueldo * 0.1115;
  return aporte.toFixed(2);
}

/* Guardar Rol */
guardarRol = function(){
  let nombre = recuperarTextoDiv("infoNombre");
  let cedula = recuperarTextoDiv("infoCedula");
  let sueldo = recuperarTextoDiv("infoSueldo");
  let aporteEmpleado = recuperarTextoDiv("infoIESS");
  let valorPagar = recuperarTextoDiv("infoPago");
  let aporteEmpleador = calcularAporteEmpleador(sueldo);
  let rol = {};
  rol.cedula = cedula;
  rol.nombre = nombre;
  rol.sueldo = sueldo;
  rol.valorAPagar = valorPagar;
  rol.aporteEmpleado = aporteEmpleado;
  rol.aporteEmpleador = aporteEmpleador;
  agregarRol(rol);
  alert("El rol fue guardado.");
  deshabilitarComponente("btnGuardarRol");
}

/* Mostrar Roles */
mostrarRoles = function(){
  let cmpTabla = document.getElementById("tablaResumen");
  let rol;
  let contenidoTabla = "<table>" 
  + "<tr> <th>Cedula</th> <th>Nombre</th> <th>Valor A Pagar</th> <th>Aporte Empleado</th> <th>Aporte Empleador</th>" 
  + "</tr>"
  for(let i = 0; i < roles.length; i++){
    rol = roles[i];
    contenidoTabla += "<tr>" 
    + "<td>" + rol.cedula + "</td>" 
    + "<td>" + rol.nombre + "</td>"
    + "<td>" + rol.valorAPagar + "</td>"
    + "<td>" + rol.aporteEmpleado + "</td>"
    + "<td>" + rol.aporteEmpleador + "</td>"
    +"</tr>"
  }
  contenidoTabla += "</table>"
  cmpTabla.innerHTML = contenidoTabla;
  mostrarTotales();
}

/* Mostrar Totales */
mostrarTotales = function(){
  let totalEmpleado = 0;
  let totalEmpleador = 0;
  let totalAPagar = 0;
  let totalNomina = 0;
  let rol;
  for(let i = 0; i < roles.length; i++){
    rol = roles[i];
    totalAPagar += parseFloat(rol.valorAPagar);
    totalEmpleador += parseFloat(rol.aporteEmpleador);
    totalEmpleado += parseFloat(rol.aporteEmpleado);
  }
  mostrarTexto("infoTotalPago", totalAPagar);
  mostrarTexto("infoAporteEmpresa", totalEmpleador);
  mostrarTexto("infoAporteEmpleado", totalEmpleado);
  totalNomina =totalEmpleado + totalEmpleador + totalAPagar;
  mostrarTexto("infoTotalNomina", totalNomina.toFixed(2));
}
