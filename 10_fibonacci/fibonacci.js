const fibonacci = function(number) {
  if (number <= 0) return "OOPS";

  let a = 1;
  let b = 0;
  let preva = 0;

  for (let i = 1; i < number; i++) {
    preva = a;
    a += b;
    b = preva;
  }

  return a;
};

// Do not edit below this line
module.exports = fibonacci;
