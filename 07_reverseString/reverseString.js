const reverseString = function(stringToRevert) {
    let reverted = "";

    for(let i=stringToRevert.length-1; i<0; i--){
        reverted += stringToRevert[i];
    }
    return reverted;
};

// Do not edit below this line
module.exports = reverseString;
