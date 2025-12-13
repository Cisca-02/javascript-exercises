const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(addends) {
	return addends.reduce((total, num) => total+num, 0);
};

const multiply = function(factors) {
  return factors.reduce((total, num) => total*num, 1);
};

const power = function(base, exponent) {  
  return base ** exponent;
};

const factorial = function(num) {
  let total = 1;
	for(let i=num; i>=1; i--){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
