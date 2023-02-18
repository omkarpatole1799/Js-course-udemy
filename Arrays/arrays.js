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
