const add = function(int1, int2) {
  return int1 + int2;
};

const subtract = function(int1, int2) {
  return int1 - int2;
};

const sum = function(array) {
  let output = 0;
  for (let i = 0; i < array.length; i++) {
    output = output + array[i];
  }
  return output;
};

const multiply = function(array) {
  let output = 1;
  for (let i = 0; i < array.length; i++) {
    output = output * array[i];
  }
  return output;
};

const power = function(int1, int2) {
  return int1 ** int2;
};

const factorial = function(int1) {
  let output = 1;
  for (let i = 1; i <= int1; i++) {
    output = output * i;
  }
  return output;
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
