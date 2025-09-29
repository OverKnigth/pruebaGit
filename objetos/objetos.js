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

crearProducto = function(){
    let producto1 = {
        nombre: "Coca-Cola",
        precio: 1.50,
        stock: 100
    }

    let producto2 = {
        nombre: "Doritos",
        precio: 0.75,
        stock: 100
    }

    console.log("Producto 1: " + producto1.nombre);
    console.log("Producto 2: " + producto2.nombre);

    if(producto1.stock > producto2.stock){
        console.log("El producto 1 tiene mas stock");
    } else if(producto2.stock > producto1.stock){
        console.log("El producto 2 tiene mas stock");
    } else{
        console.log("Ambos productos tienen el mismo stock");
    }
}

modificarAtributos = function(){
    let cuenta = {
        numero: "1234567890",
        saldo: 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function(){
    let cliente = {
        cedula: "1234567890",
        nombre: "Juan"
    }

    let cliente1 = {}
    cliente1.nombre = "Romeo";
    cliente1.apellido = "Santos";
    cliente1.cedula = "1234567890";
    console.log(cliente1.nombre + " " + cliente1.apellido);
}

probarIncrementarSaldo = function(){
    let cuenta = {
        numero: "1234567890",
        saldo: 1.20
    }
    incrementarSaldo(cuenta, 100);
    console.log(cuenta.saldo);
}

probarDeterminarMayor = function(){
    let persona1 = {
        nombre: "Romeo",
        apellido: "Santos",
        edad: 24
    }

    let persona2 = {
        nombre: "Predro",
        apellido: "Morales",
        edad: 20
    }

    let mayor = determinarMayor(persona1, persona2);
    if(mayor != null){
        console.log(mayor.apellido + " " + mayor.nombre + " es mayor");
    } else{
        console.log("Ambas personas tienen la misma edad");
    }
}

incrementarSaldo = function(cuenta, monto){
    cuenta.saldo += monto;
}

determinarMayor = function(persona1, persona2){
    if(persona1.edad > persona2.edad){
        return persona1;
    } else if(persona2.edad > persona1.edad){
        return persona2;
    } else{
        return null;
    }
}
