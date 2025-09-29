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