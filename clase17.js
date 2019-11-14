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
    altura : 1.70
}

const personas = [Dav, Andres, Juan]

for (var i=0; i< personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}
