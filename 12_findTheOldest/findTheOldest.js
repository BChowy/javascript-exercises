const findTheOldest = function (people) {
  return people.reduce((oldest, current) =>
    getAge(oldest.yearOfBirth, oldest.yearOfDeath) >
    getAge(current.yearOfBirth, current.yearOfDeath)
      ? oldest
      : current
  );
};

const getAge = function (birth, death) {
  if (death === undefined) death = new Date().getFullYear();
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
