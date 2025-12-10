//funzione che accetta come parametri un array e un elemento da rimuovere eventualmente dall'array
const removeFromArray = function(arr, ...args) {
    return  arr.filter(elem => !args.includes(elem));
};

//dati
let arrayToModify = [1,2,3,4];
let toRemove = 3;

removeFromArray(arrayToModify, toRemove);

// Do not edit below this line
module.exports = removeFromArray;
