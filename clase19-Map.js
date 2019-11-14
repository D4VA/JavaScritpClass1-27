var Daniel = {
    nombre:'Eduardo',
    apellido: 'Estrada',
    Altura: 1.80
}

var Dav = {
    nombre:'Diego',
    apellido: 'Velásquez',
    altura: 1.68,
}

var Andres = {
    nombre:'Andres',
    apellido: 'Avila',
    altura: 1.70
}

var Juan  = {
    nombre:'Jose',
    apellido: 'Avila',
    altura: 1.86
}

var Luis = {
    nombre: 'Luis',
    apellido: 'Avila',
    altura : 1.74
}

const esAlta= ({ altura }) =>  altura > 1.8
const esBajo= ({ altura }) => altura < 1.8

var personas = [Dav, Andres, Juan, Daniel, Luis]

var personasAltas = personas.filter(esAlta)
var personasBajas  = personas.filter(esBajo)

//var personasAltas = personas.filter(function(persona){
//    return persona.altura>1.8
//})
//    persona.altura = persona.altura *100
const pasarAlturaCms = persona =>({
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaCms)

console.log(personasCms)
console.log(personasAltas)
console.log(personasBajas)