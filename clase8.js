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
    console.log(nombre.toUpperCase())
}
imprimirNombreEnMayusculas(Dav)
imprimirNombreEnMayusculas(Avila)
imprimirNombreEnMayusculas({ nombre: 'Diego'})
//Error, no le estamos pasando la function nombre
//imprimirNombreEnMayusculas({ apellido : 'Avila' })


function cumpleaanos(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

cumpleaanos(Dav)

