/* La Documentacion esta en la clase26.js
    ahi estara como una explicacion de como funciona */
class Persona {
    constructor (nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this. altura = altura
}
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        return this.altura > 1.80
    }
}

class Desarrollador extends Persona{
    constructor(nombre,apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy `)
    }
}

function responderSaludo (nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`ah mira, no sabia que eras desarrolador`)
    }
}


var Dav = new Desarrollador ('Dav', 'Avila', 1.70) 
var Melanie = new Persona ('Melanie', 'Payes', 169)

Dav.saludar()
Melanie.saludar()