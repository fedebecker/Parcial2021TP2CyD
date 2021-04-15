/**
 * Dado un array de numeros enteros, complete las funciones para que retorne un array conteniendo 
 * solo los numeros pares y solo numeros impares respectivamente
 */


const even = function(numbers){
    var pares =[];
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i]%2===0){
            pares = [...pares, numbers[i]];
        }
    }
    return pares;
}


const odd = function(numbers){
    var inpares =[];
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i]%2===1){
            inpares = [...inpares, numbers[i]];
        }
    }
    return inpares;
}

// TESTS (no modificar)
const arrEqual = (a1,a2) => JSON.stringify(a1) == JSON.stringify(a2);
console.log(arrEqual(even([4,2,6,1,0,2,5]),[4,2,6,0,2]));
console.log(arrEqual(odd([4,2,6,1,0,2,5]),[1,5]));
