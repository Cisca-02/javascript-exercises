const findTheOldest = function(people) {

    //Step 1: ordinare le persone dal più vecchio al più giovane
    const older = people.sort((p, s) => ((p.yearOfDeath - p.yearOfBirth) > (s.yearOfDeath - s.yearOfBirth)) ? -1 : 1);

    //Step 2: ritornare la prima persona
    return older[0];
};

// Do not edit below this line
module.exports = findTheOldest;
