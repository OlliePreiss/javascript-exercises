const findTheOldest = function(array) {
  const currentYear = new Date().getFullYear();
  array.forEach(getAge);

  function getAge(person) {
    person.yearOfDeath === undefined ? person.age = currentYear - person.yearOfBirth : person.age = person.yearOfDeath - person.yearOfBirth;
  }

  array.sort(function(a, b) {
    return a.age > b.age ? -1 : 1;
  });

  return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;

// const oldest = array.sort(function(a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1 : 1);
