const palindromes = function (word) {
  const reversedWord = word.split("").reverse().join("");
  return reversedWord === word;
};

// Do not edit below this line
module.exports = palindromes;
