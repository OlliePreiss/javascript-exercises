const repeatString = function(string, repetitons) {
  let newString = "";
  for (let i = 1; i <= repetitons; i++) {
    newString = newString + string;
  }
  return newString;
}

// Do not edit below this line
module.exports = repeatString;
