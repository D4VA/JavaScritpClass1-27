//Operaciones con tipos de datos (variables y Magic Valors)
// magig valors son aquellos que no son declarados
// como variables (var) o constantes (const)
var edad = 27

//como esta abajo,tambien tiene la misma funcion
//pero esta simplificado como la usamos
//edad = edad +1
edad += 1

var peso = 75

//peso = peso - 2
peso -= 2

var sandwich = 1 

peso = peso + sandwich

var jugarFutbol = 3

peso -= jugarFutbol

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100
var totalstr = total.toFixed(3)
var total2 = parseFloat(totalstr)

var pizza = 8
var persona = 2
var cantidadPorciones = pizza / persona
