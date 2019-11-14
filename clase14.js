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
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() <0.4

const META = Dav.peso - 3

var dias = 0

while (Dav.peso > META) {
    debugger
    if(comeMucho()){
        aumentarDePeso(Dav)
    }
    if (realizaDeporte()){
        adelgazar(Dav)
    }
    dias += 1
}
console.log(`pasaon ${dias} dias hasta que ${Dav.nombre} adelgazo 3KG`)

console.log(`Al final del año ${Dav.nombre} pesa ${Dav.peso.toFixed(2)}kg`)