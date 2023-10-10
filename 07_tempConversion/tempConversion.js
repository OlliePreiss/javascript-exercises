const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  return (celsius * 1.8) + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
