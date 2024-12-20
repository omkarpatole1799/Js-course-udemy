"use strict";

const myArr = ["a", "b", "c", "d", "e"];
const myArr1 = ["1", "2", "3", "4", "5"];

// slice method //
// this doesnt mutate original array
// this slic array from index 1 upto the end
console.log(myArr.slice(1));

// this slice array from index 2 to index 4
console.log(myArr.slice(2, 4));

// this slice array of last index
console.log(myArr.slice(-1));

// this slice arry from 2 to last index of -2
console.log(myArr.slice(2, -2));

// shallow copy using slice method
console.log(myArr.slice());

// shallow copy using spread operator
console.log([...myArr]);

// splice method //
// mutates the original array
// splice delete the elements which are spliced/ extracted

// removed last element of array
myArr.splice(-1);

// remove elements of index 2,3
myArr.splice(2, 3);
console.log(myArr);

// reverse //
// mutate original array
// reverse all elements in array
console.log(myArr.reverse());

const myArr3 = ["a", "b", "c", "d", "e"];
const myArr4 = ["1", "2", "3", "4", "5"];

// concat //
// joins to array
// not mutate original array
const newArr = myArr3.concat(myArr4);
console.log(newArr);

// using spread operator concat
console.log([...myArr3, ...myArr4]);

// join //
// joing all elements in array using +
console.log(newArr.join("+"));

const arr = [23, 3, 22];
// at method
// syntax= arr.at(0)  this means element of array at 0 index
// useful when using methods chaining
// first element of array
arr[0];
arr.at(0);

// get last element of array
// traditional method
arr[arr.length - 1];
arr.slice(-1)[0];

// using at method
arr.at(-1);

// at methods on string
const myStr = "omkar";
console.log(myStr.at(2));
console.log(myStr.at(-1));

const transactions = [22, -433, 1, -33, -22, -55];

// itrating through transactions aray
// for of loop
// suppose we want index of each element then we destructure the arr as follows
// for (const [i,element] of array)
// i = index of each element
// element = each element in array

for (const [i, transaction] of transactions.entries()) {
  transaction > 0
    ? console.log(`${i + 1}:credited ${Math.abs(transaction)}`)
    : console.log(`${i + 1}:debited ${Math.abs(transaction)}`);
}

// regular
for (const transaction of transactions) {
  transaction > 0
    ? console.log(`credited ${Math.abs(transaction)}`)
    : console.log(`debited ${Math.abs(transaction)}`);
}

console.log("(--- forEach ---)");

// --- forEach method --- //

// syntax arr.forEach(function(element,index,wholeArr){})
// element - each element in the array
// index - index of each element
// wholeArr - gives whole array

transactions.forEach(function (transaction) {
  transaction > 0
    ? console.log(`credited ${Math.abs(transaction)}`)
    : console.log(`debited ${Math.abs(transaction)}`);
});

// getting index and element
transactions.forEach(function (transaction, i, arr) {
  transaction > 0
    ? console.log(`${i + 1}:credited ${Math.abs(transaction)}`)
    : console.log(`${i + 1}:debited ${Math.abs(transaction)}`);

  console.log(arr);
});

// for each on map //
const myMap = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "EURO"],
  ["INR", "Indian Rupee"],
]);
myMap.forEach(function (value, key, arr) {
  console.log(`${key} : ${value}`);
});

// for each on sets //

const mySet = new Set(["EUR", "EUR", "USD", "INR", "INR"]);

mySet.forEach(function (value, key, arr) {
  console.log(`${key} : ${value}`);
  console.log(arr); // this returns set with unique value only
});
// in sets we dont have key value pair so instead of giving key it gives the value
// so we see same values for ${key} & ${value}
// ===============================================================================
// ===============================================================================
// map method on array //
// created new array based on current array
// when map used it return new array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// itrating over movements array using map method
const usdToEur = movements.map(function (movement, i) {
  return movement * 1.1;
});
// here in this example we use map method on movements array and it returns new array and we have stored it in 'usdToEur'
console.log(usdToEur);

// using for of loop
const usdToEurFor = [];
for (const movement of movements) {
  usdToEurFor.push(movement * 1.1);
}
console.log(usdToEurFor);

const messageDiaplay = movements.map((movement, i) => {
  const action = movement > 0 ? "deposited" : "withdrawn";
  return `${i + 1}:${action} ${Math.abs(movement)}`;
});
console.log(messageDiaplay);

// ===============================================================================
// ===============================================================================
// filter method on array //
// checks the element according to condition
// if the condition is true then element is included in array
const deposit = movements.filter(function (movement) {
  return movement > 0; // this means if the movement is greater than zero then return to the "deposit" array
});
console.log(deposit);

const withdrawals = movements.filter(function (movement) {
  return movement < 0; // this return movement which is less than zero in 'withdrawls' array
});
console.log(withdrawals);
// ===============================================================================
// ===============================================================================
// reduce method on array //
// reduces all array elements to one single value (i.e. all elements together)

// syntac .reduce(function(accumulator, currentValue,index,array){},0)
// accumulator = current total value
// currentValue = current value
// ,0 = starting value of accumulator is zero

const totalBalance = movements.reduce(function (accumulator, movement) {
  return accumulator + movement;
}, 0);
console.log(totalBalance);

const totalBalance2 = movements.reduce((acc, mov) => acc + mov, 0);
console.log(totalBalance2);

// calculate maximum and min value in array using .reduce method
const maxValue = movements.reduce(function (accumulator, movement) {
  // if the accumulator value is greater than current value (i.e. movment)
  // then return accumulator as the current accumultor value
  if (accumulator > movement) {
    return accumulator;
  } else {
    return movement; // else return 'currentValue' as the new accumulator value
  }
}, movements.at(0)); // movement.at(0) = so this function starts from first element of array (i.e. arr.at(0))
console.log(maxValue);

const minValue = movements.reduce(function (accumulator, movement) {
  console.log(accumulator);
  if (accumulator < movement) {
    return accumulator;
  } else {
    return movement;
  }
}, movements.at(0));

console.log(minValue);

// ===============================================================================
// ===============================================================================
// data
const account1 = {
  owner: "Omkar Patole",
  movements: [12, -40, 233, 500, -90, 66, 22, -99, 1000, -6, -30, 225, 633],
  // movements: [10, -5, 10],
  interestRate: 1.22,
  password: 1111,
};

const account2 = {
  owner: "Suraj Ghodke",
  movements: [10, 21, -3, 800, -300, 287],
  interestRate: 1.23,
  password: 2222,
};

const account3 = {
  owner: "Yash Patil Patil",
  movements: [66, 22, -99, 1000, -6, -30, 225, 633],
  interestRate: 1.24,
  password: 3333,
};

const accounts = [account1, account2, account3];
// ===============================================================================
// ===============================================================================

// find method //
// only return first element which match condition
// only return element not an array

const account = accounts.find((account) => {
  return account.owner === "Suraj Ghodke";
});
// console.log(account);

for (const account of accounts) {
  if (account.owner === "Suraj Ghodke") {
    console.log(account);
  }
}

// ///////////////////////////
// find index method
//////////////////////////////

// returns the index of the element
const index = accounts.findIndex((account) => {
  return account.owner === "Yash Patil Patil";
});
console.log(index);

// 2-3-23
// some method //

// some return true and false based on condition
// work if only one element meets the condition
// this method can be used when condition is 'any'
const deposits = movements.some((movement) => {
  return movement > 0;
});

// every method //
// every return only true if all element in array meets the condition
movements.every((movement) => {
  return movement < 0;
});

const testArr = [[1, 2, 3], [1, 2, 3, 4], 5, 6, 7, 8];
console.log(testArr.flat());
// flat method //
//  removes the nested array and make only one array
// work only for first level of nesting
// .flat method can take argument as .flat(2)
// the number '2' represents the level of nesting

// make array of all movements in all the accounts in the bank
const allAccountMovementsArr = accounts.map((account) => {
  return account.movements;
});
console.log(allAccountMovementsArr);
console.log(allAccountMovementsArr.flat(2));

const totalAmount = allAccountMovementsArr
  .flat(2)
  .reduce(function (accumulator, amount) {
    return accumulator + amount;
  }, 0);
console.log(totalAmount);

console.log(
  accounts
    .map((account) => {
      return account.movements;
    })
    .flat(2)
    .reduce((accumulator, movements) => {
      return accumulator + movements;
    }, 0)
);

console.log("this");
console.log(
  accounts
    .map((account) => account.movements)
    .flat(2)
    .reduce((accumulator, amount) => accumulator + amount, 0)
);

// flatMap method
// combines flat and map method together for better performance
// this goes only one level deep in nested arrays
// so if we want to go more deep in nested array use both seprately
console.log(
  accounts
    .flatMap((account) => account.movements)
    .reduce((accumulator, amount) => accumulator + amount, 0)
);

// 3-3-23
// sort method //
// .sort() - sorts from A-Z
// array is mutated in this
console.log(movements);
console.log(
  movements.sort((currentValue, nextValue) => {
    if (currentValue > nextValue) return currentValue - nextValue;
    if (currentValue < nextValue) return nextValue - currentValue;
  })
);

// fill method //
// .fill(value)
// value = fill the value in the array
// new Array(7) = created array of length 7
// .fill(1,3) = start with index 1 and end at index 3
// .fill(1,3,5) = fill from index 3 to index 5 with value 1

// Array .from() method //
// Array.from({length: 7},()=> 1) which is similar to new Array(7)
const b = Array.from({ length: 7 }, (currentElement, index) => index + 1);
console.log(b);

// generate 100 random dice rolls

const randomDiceRolls = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 100)
);
console.log(randomDiceRolls);

// can also be used to convert nodelist to array as follows
// Array.from() method //
// get each movement in array from the UI of movements

// const test1 = Array.from(document.querySelectorAll(".movements__value"), (el) =>
//   Number(el.textContent.replace("€", ""))
// );

// console.log(test1);
// this can also be done using spread operator
// const test2 = [...document.querySelectorAll(".movements__value")];

// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================
// ==================================================================
//  array methods practice
// 1. calcuate all the deposits in bank
console.log("all deposites");
const depositsAll = accounts
  .flatMap((acc) => acc.movements)
  .filter((amount) => amount > 0)
  .reduce((accu, amount) => accu + amount, 0);
console.log(depositsAll);

// 2. count no of deposits which are atleat 1000 dollor
const deposit1000 = accounts
  .flatMap((account) => account.movements)
  .filter((movement) => movement >= 1000).length;
console.log(deposit1000);

console.log("using reduce method");
const deposit1000_2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (count, currentElement) => (currentElement >= 1000 ? count + 1 : count),
    0
  );
console.log(deposit1000_2);
// 3. create new object using reduce method and add all deposits and withdrawals into it
//  {deposits: 0, withdrawals: 0}
const sums = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      cur > 0 ? (sums.deposit += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposit: 0, withdrawals: 0 }
  );
console.log(sums);
// 4. create function to converto string into title case
//
const convertTitleCase = function (title) {
  const capitalFirstLetter = function (word) {
    return word[0].toUpperCase() + word.slice(1);
  };
  // which words to exclude from title case sentence
  const except = ["a", "an", "the"];
  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (except.includes(word) ? word : capitalFirstLetter(word)))
    .join(" ");
  return capitalFirstLetter(titleCase);
};
console.log(convertTitleCase("this Is Another TITLE a an"));
console.log(convertTitleCase("a this Other titLE"));
