var Dav = {
    nombre: 'Dav',
    apellido: 'Avila',
    edad: 18
}

var Avila = {
    nombre: 'Andres',
    apellido: 'Velasquez',
    edad: 28
}
2
function imprimirNombreEnMayusculas(persona){
    // var nombre = persona.nombre
    var { nombre } = persona
    //toUpperCase vuelve las letras de minusculas a mayusculas
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(Dav)
imprimirNombreEnMayusculas(Avila)
imprimirNombreEnMayusculas({ nombre: 'Diego'})
//Error, no le estamos pasando la function nombre
//imprimirNombreEnMayusculas({ apellido : 'Avila' })

function imprimirNombreyEdad(persona){
    var { nombre } = persona
    var { edad } = persona
    //las variables, se solo se pueden declaras entre comilla inveritda
    //no comillas normales ("") ni tampoco en (''), solo (``)
    //y tienen que estar tal como en el ejemplo de abajo ${variable}
    console.log(`Hola soy ${nombre} y tengo ${edad} anyos`)
}

imprimirNombreyEdad(Dav)
imprimirNombreyEdad(Avila)