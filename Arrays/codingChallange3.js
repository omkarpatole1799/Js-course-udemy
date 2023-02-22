// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
console.log("coding challange 3");
const calcAverageHumanAge = function (ages) {
  // calculate dog to human age
  const humanAge = ages
    .map((age) => {
      if (age <= 2) {
        return 2 * age;
      } else {
        return 16 + age * 4;
      }
    })
    // filter adult dogs
    .filter((age) => {
      return age > 18;
    })
    .map((age, i, arr) => {
      return age / arr.length;
    })
    // calculate average age of all dogs
    .reduce((accumulator, age) => {
      return accumulator + age;
    }, 0);

  return humanAge;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
