// Crearemos una función que recorrerá una lista

functionrecorredorDeListas(functionPasadaPorParametro){

    // Recorremos la lista.
    // Utilizamos la palabra reservada this para referirnos al objeto que es dueño de este método.

    for(var i=0; i<this.length; i++){
        // Ejecutamos la función pasada como parámetro, la cual se le envía el elemento actual.
        functionPasadaPorParametro(this[i]);
    }

}

// Creamos un arreglo con el nombre de varias personas y lo guardamos en una variable que llamaremos personas.
personas = newArray('Martin','Enrique','Fernanda','Maria','Alejandro','Alondra');

// Asignamos la función al método recorredor
personas.recorredor = recorredorDeListas;