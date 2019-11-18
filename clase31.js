const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }



function obtenerPersonaje(id){
    return new Promise((resolve, reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
            .get(url, opts, function(data){
                resolve(data)
        })
        .fail(() => rejec(id))
    })
}


function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

function imprimirNumero (){
    return 
}


obtenerPersonaje(3)
.then(function(personaje){
    console.log(`El personaje 2 es`)
})

obtenerPersonaje(2)
.then(function(personaje) {
    console.log(`El personaje 2 es ${personaje.name}`)
})
.catch(onError)
