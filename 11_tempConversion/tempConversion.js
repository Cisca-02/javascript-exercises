//funzione che prende in input una temperatura espressa in fahrenheit e la converte in celsius
const convertToCelsius = function(fahrenheitTemp) {
  //Step 1: applico la formula e ottengo un risultato
  let celsiusTemp = (fahrenheitTemp-32)*(5/9);

  //Step 2: approssimo il risultato alla prima cifra decimale
  return Math.round(celsiusTemp*10)/10;
};

const convertToFahrenheit = function(celsiusTemp) {
  //Step 1: applico la formula e ottengo un risultato
  let fahrenheitTemp = (celsiusTemp*(9/5) + 32);
  
  //Step 2: approssimo il risultato alla prima cifra decimale 
  return Math.round(fahrenheitTemp*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
