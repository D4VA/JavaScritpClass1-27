var Dav = {
    nombre: 'Dav',
    apellido: 'Avila',
    edad: 18,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: true
}

var Andres = {
    nombre: 'Andres',
    apellido: 'Avila',
    edad: 17,
}

function imprimirProfesiones (persona){
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero === true){
        console.log('Ingeniero')
    }
    else{
        console.log('No es Ingeniero')
    }
    if(persona.cocinero){
        console.log('cocinero')
    }
    if (persona.cantante){
        console.log('DJ')
    }
    if (persona.guitarrista){
        console.log('Guitarrista')
    }
}

imprimirProfesiones(Dav)

const MAYORIA_DE_EDAD = (18)

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiesMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}