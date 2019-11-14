var nombre = 'Dav', edad = 28

//Le dio los valores de 'n' y 'e'
function imprimirEdad(n, e){
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre,edad)

// eric, es 'n' y 'e' es edad
imprimirEdad(`Eric`, 23)
imprimirEdad(`Dario`, 23)

//que poner los valores en orden
//si no, erick si es colocado donde esta el 23, seria visto como edad
// y el 23 si se coloca donde esta eric, se veria como si fuera nombre
imprimirEdad(12, `edad`)
imprimirEdad()
