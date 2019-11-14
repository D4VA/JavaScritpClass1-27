class Persona {
    constructor (nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this. altura = altura
}

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

function responderSaludo (nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`ah mira, no sabia que eras desarrolador`)
    }
}


var Dav = new Desarrollador ('Dav', 'Avila', 1.70)
var Melanie = new Persona ('Melanie', 'Payes', 1.69)
var Juan = new Persona('Juan Jose', 'Soria', 1.80)

Dav.saludar(responderSaludo)
Melanie.saludar(responderSaludo)
Juan.saludar()