//funzione che accetta come parametri un array e un elemento da rimuovere eventualmente dall'array
const removeFromArray = function(arr, toRemove) {
    let newArr = arr.filter(elem => {
        if(elem === toRemove){
            return false;
        }
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
