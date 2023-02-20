/*Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

console.log("coding challange 2");
// solution 1
const dogAgesData1 = [5, 2, 4, 1, 15, 8, 3];
const dogAgesData2 = [16, 6, 10, 5, 6, 1, 4];

// const calcDogAgesInHumanYear = dogAgesData1.map(function (el, i) {
//   if (el <= 2) {
//     return 2 * el;
//   } else {
//     return 16 + el * 4;
//   }
// });
// console.log(typeof calcDogAgesInHumanYear);
// const adults = calcDogAgesInHumanYear.filter(function (el) {
//   return el >= 18;
// });
// console.log(adults);

// const calcAverageHumanAge = adults.reduce(function (acc, el,i,arr) {
//   console.log(acc);
// }, 0);

// solution 2 == optimised

function calcAverageHumanAge(ages) {
  // dog to human age convert
  const dogToHumanAge = ages.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  // remove ages which are less than 18
  const adults = dogToHumanAge.filter(function (age) {
    return age >= 18;
  });
  // average age
  //   const averageAge = adults.reduce(function (accumulator, age, i, arr) {
  //     return accumulator + age;
  //   }, 0)/adults.length;

  const ageTotal = adults.reduce(function (accumulator, age) {
    return accumulator + age;
  });
  console.log(ageTotal / adults.length);
  return ageTotal / adults.length;
}
calcAverageHumanAge(dogAgesData1);
calcAverageHumanAge(dogAgesData2);
