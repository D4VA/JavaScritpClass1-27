function persona(nombre, apellido, estatura){
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
    this.edad = 20
}

const ESTATURA_ALTA = 180

persona.prototype.saludar = function (){
    if(this.estatura >= ESTATURA_ALTA){
            estatura = 'alto'
    }else{
        estatura = 'bajo'
    }
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy ${estatura}`)
}

persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}
/* persona.prototype.estatura = function (){
    if(this.estatura >= ESTATURA_ALTA){
        estatura = 'alto ';
    }else{
        estatura = 'bajo'
    }
    console.log(`hola, me llamo ${this.nombre}, ${this.apellido} y soy ${estatura}`)
}*/

    
var Dav = new persona('Dav','Avila', 1.80)
var ericka = new persona(`Erika`, `Luna`, 1.70)
var Luis = new persona ('Arturo', 'Martinez', 1.69)
