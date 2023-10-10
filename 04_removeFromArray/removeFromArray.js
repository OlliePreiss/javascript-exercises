const removeFromArray = function(array, index, range = 1) {
  array.splice(index - 1, range);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
