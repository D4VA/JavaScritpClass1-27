/* Funciones con parametros */
class Persona {
    //el constructor se encuentra como si fuera una variables
    //Son datos que se declaran
    constructor (nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this. altura = altura
}
    //saludar(fn) esta dandole parametros
    saludar(fn){
        var {nombre, apellido} = this
        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido)
        }
    }

    soyAlto(){
        return this.altura > 1.80
    }
}

class Desarrollador extends Persona{
    constructor(nombre,apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        var {nombre, apellido} = this
        //var nombre = this.nombre
        //var apellido = this.apellido
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}
// si la persona es Desarrolador (se instancia el objeto como desarrollador)
// entonces se esjecura lo que esta en esta funcion y se imprimira en consola
function responderSaludo (nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`ah mira, no sabia que eras desarrolador`)
    }
}

//estan las funciones desarrollador y persona
//dependiendo cual sea, se ejecutara esa funcion
var Dav = new Desarrollador ('Dav', 'Avila', 1.70)
var Melanie = new Persona ('Melanie', 'Payes', 1.69)
var Juan = new Persona('Juan Jose', 'Soria', 1.80)

Dav.saludar(responderSaludo)
Melanie.saludar(responderSaludo)
Juan.saludar()