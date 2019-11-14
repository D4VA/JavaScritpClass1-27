var Daniel = {
    nombre:'Eduardo',
    apellido: 'Estrada',
    Altura: 1.80,
    cantidadDeLibros: 70 
}

var Dav = {
    nombre:'Diego',
    apellido: 'Velásquez',
    altura: 1.68,
    cantidadDeLibros: 90
}

var Andres = {
    nombre:'Andres',
    apellido: 'Avila',
    altura: 1.70,
    cantidadDeLibros: 100
}

var Juan  = {
    nombre:'Jose',
    apellido: 'Avila',
    altura: 1.86,
    cantidadDeLibros: 85
}

var Luis = {
    nombre: 'Luis',
    apellido: 'Avila',
    altura : 1.74,
    cantidadDeLibros: 105
}

var personas = [Dav, Andres, Juan, Daniel, Luis]
//var acum = 0

//for (var i= 0; i<personas.length; i++){
//    acum = acum + personas[i].cantidadDeLibros
//}

const reduce = (acum, { cantidadDeLibros } ) =>
acum + cantidadDeLibros

var totalDeLibros = personas.reduce(reduce, 0)

console.log (`En total todos tiene ${totalDeLibros} libros`)
