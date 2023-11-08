//EJERCICIO 1

 let mostrar=mensaje => console.log(mensaje)

 //EJERCICIO 2

 let crearMultiplicacion=(numero1, numero2) => {
    let resultado= numero1 * numero2
    return resultado
 }

console.log(crearMultiplicacion(2,2))

//EJERCICIO 3

const array=[1,2,3,4,5,6,7,8,9]

let nuevoArray=array.map ((number, number2) => crearMultiplicacion(number, number2))
    console.log(nuevoArray)

//EJERCICIO 4

let cervezasMasAlcoholicas= beers.filter (beers => {return beers.abv > 7.3})
console.log(cervezasMasAlcoholicas)

//EJERCICIO 5

let cervezasMenosAmargas= beers.filter (beers => {return beers.ibu < 42})
console.log(cervezasMenosAmargas)

//EJERCICIO 6

function nombreCerveza(nombre){return beers.find(beers=> beers.name==nombre)}
console.log(nombreCerveza("Buzz"))

//EJERCICIO 7

let valorIngresado= 60
function encontarIbu(beers,valor){ 
    const comparar=(beers.find(beer=> beer.ibu==valor))
 if(comparar){
return comparar
}
console.log(`No existe cerveza con ibu de ${valor}` )

}
console.log(encontarIbu(beers,valorIngresado))

//EJERCICIO 8

function buscarPosicion (nombre){
    let encontrar=nombreCerveza(nombre)
    if(encontrar)
    return beers.indexOf(encontrar)
    else{
    console.log(`${nombre} no existe`)
    }
    }
    console.log(buscarPosicion("Trashy Blonde"))

//EJERCICIO 9

function nuevoArrayCervezas (objeto , valor) {
    let arrayNuevo = [ ]
    for (let i = 0; i < objeto.length; i++) {
        const retornoFuncion = valor( objeto[i], i , objeto)
        arrayNuevo.push(retornoFuncion)
    }
    return arrayNuevo
}

function encontrarAbv(beers,valor){ 
    const noExcedenAbv=(beers.filter(beer=> beer.abv <= valor))
    .map((beer)=> {
        const cervezaNueva={
            nombre: beer.name,
            abv: beer.abv,
            ibu: beer.ibu,
        }
        return cervezaNueva
    } )
    return noExcedenAbv
} 
console.log(encontrarAbv(beers , 4.5))

//EJERCICIO 10

function cervezasNuevas(arreglo , propiedad , booleano){
    const cervezasOrdenadas=arreglo.toSorted((a,b) => {
        if( a[propiedad] < b[propiedad] ){
            return -1
        }
        if( a[propiedad] > b[propiedad]){
            return 1
        }
        
        return booleano
    } 
    )
    //.map(arreglo => arreglo.name)
   
    return cervezasOrdenadas.slice (0 , 10)
    
}

console.log(cervezasNuevas(beers , "name" , true))

//EJERCICIO 11
function rellenarTabla(beers, id){
    const buscartable = document.getElementById(id)
    
    function crearFila (beer){
    let fila= `<tr>
    <td>${beer.name}</td>
    <td>${beer.abv}</td>
    <td>${beer.ibu}</td>
    
    </tr>`
    return fila
    }
    beers.forEach(beer => {
        let fila2=crearFila(beer)
        buscartable.innerHTML+=fila2
    }
    )
    }
    
    rellenarTabla(cervezasNuevas(beers, "name" , true), "tbody")
