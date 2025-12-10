const repeatString = function(stringToRepeat, num) {
    let result="";

    if(num<0){
        return "ERROR";
    }

    for(let i=0; i<num; i++){
        result += stringToRepeat;
    }
    return result;
};

console.log(repeatString("Cisca", 100));


// Do not edit below this line
module.exports = repeatString;
