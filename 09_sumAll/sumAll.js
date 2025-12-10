const sumAll = function(a, b) {
    
    let min;
    let max;

    if(b<0 || a<0 || !Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }

    //faccio in modo che anche se l'ordine di inserimento degli estremi sia inatteso, l'output sia corretto
    if(b<a){
        min = b;
        max = a;

    }else{
        min = a;
        max = b;
    }

    let total = min;

    while(max != min){
        total += max;
        max--;    
    }
    return total;
};

sumAll(2,4);

// Do not edit below this line
module.exports = sumAll;
