var contador = 0
var llueve = () => Math.random() < 0.25
var numeroVeces = '' 

var lluvia = ''

do{
    contador++
}while (!llueve()){
    if (contador === 1){
        numeroVeces = 'vez';
    }else{
        numeroVeces = 'veces'
    }if (contador === 1){
        lluvia = 'volvere a ir'
    }else{
        lluvia = 'ya no llovera'
    }
}

console.log(`Fui a ver si llovía ${contador} ${numeroVeces}, ${lluvia}`)
