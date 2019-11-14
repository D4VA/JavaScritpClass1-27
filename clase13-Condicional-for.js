var Dav = {
    nombre:'Andres',
    apellido: 'Avila',
    edad: 18,
    peso: 60
}

console.log(`Al Inicio del año ${Dav.nombre} pesa ${Dav.peso}kg`)

// function aumentarDePeso (persona){
//    return persona.peso += INCREMENTO_PESO 
//}

const DIAS_DEL_ANIO = 365
const INCREMENTO_PESO = 0.2

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar  = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var random = Math.random()
    
    if (random< 0.25){
        aumentarDePeso(Dav)
    }else if (random < 0.5){
        adelgazar(Dav)
    }
}

console.log(`Al final del año ${Dav.nombre} pesa ${Dav.peso.toFixed(2)}kg`)