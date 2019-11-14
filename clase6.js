var Dav = {
    nombre: 'Dav',
    apellido : 'Avila',
    edad : 28
}

var Avila = {
    nombre : 'Andres',
    apellido : 'Velasquez',
    edad : 28
}

function imprimirNombreEnMayusculas({ nombre }){
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Dav)
imprimirNombreEnMayusculas(Avila)
imprimirNombreEnMayusculas({ nombre: 'Diego'})
//Error, no le estamos pasando la function nombre
imprimirNombreEnMayusculas({ apellido : 'Avila' })
