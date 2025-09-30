let clientes = [
  { cedula: "1234567890", nombre: "Romeo", edad: 20},
  { cedula: "1234567891", nombre: "Mario", edad: 50},
  { cedula: "1234567892", nombre: "Maria", edad: 30},
];

guardarCambios = function(){
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");

    let datosCliente={}
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;
    modificarCliente(datosCliente);

    mostrarClientes();

}

modificarCliente = function(cliente){
    clienteEncontrado = buscarCliente(cliente.cedula);
    if(clienteEncontrado != null){
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }
}

crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");

    let nuevoCliente={}
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;
    agregarCliente(nuevoCliente);

    console.log(clientes);
}

agregarCliente = function(cliente){
    let resultado = buscarCliente(cliente.cedula);
    if(resultado == null){
        clientes.push(cliente);
        alert("El cliente con la cedula: " + cliente.cedula + " fue agregado");
        mostrarClientes();
    } else{
        alert("El cliente con la cedula: " + cliente.cedula + " ya existe");
    }

}

ejecutarBusqueda = function(){
    let valorCedula = recuperarTexto("txtCedulaBuscar");
    let resultado = buscarCliente(valorCedula);
    if(resultado == null){
        alert("El cliente con la cedula: " + valorCedula + " no fue encontrado");
    } else{
        mostrarTextoEnCaja("txtCedula", resultado.cedula);
        mostrarTextoEnCaja("txtNombre", resultado.nombre);
        mostrarTextoEnCaja("txtEdad", resultado.edad);
    }
}

buscarCliente = function(cedula){
    let elementoCliente;
    let clienteEncontrado = null;
    for(let i = 0; i < clientes.length; i++){
        elementoCliente = clientes[i];
        if(elementoCliente.cedula == cedula){
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

mostrarClientes = function(){
    let cmpTabla = document.getElementById("tablaClientes");
    let elementoCliente;
    let contendioTabla = "<table><tr>"
    + "<th>Cedula</th>"
    + "<th>Nombre</th>"
    + "<th>Edad</th>"
    + "</tr>"
    for(let i = 0; i < clientes.length; i++){
        elementoCliente = clientes[i];
        contendioTabla += "<tr>"
        + "<td>" + elementoCliente.cedula + "</td>"
        + "<td>" + elementoCliente.nombre + "</td>"
        + "<td>" + elementoCliente.edad +"</td>"
        + "</tr>"
    }
    contendioTabla += "</table>";
    cmpTabla.innerHTML = contendioTabla;
}
