"use strict";

//all numbers are represented in floating point number internally
console.log(23 === 23.0);
// one datatype for all numbers

// base 10 - 0-9
// binary base 2 =0 1

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// converting string to numbers

console.log(Number("23"));
console.log(+"23"); // this does type coersion

// pasring
// .parseInt = convert string to numbers and removed unnecessary  symbols in this case 'px' is removed
// syntax = .parseInt('number_string',base(10 or binary))

console.log(Number.parseInt("30px", 10));

// but srings should only start with numbers
console.log(Number.parseInt("px20")); // this is wrong way of doing it

// .parseFloat should be goto when we want to get number out of string (e.g. when values comes from css)
console.log(Number.parseFloat("2.5rem"));

// is not a number
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(23 / 0));

// checking if value is number
// use this method as goto when we want to check if the given value is number or not
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));

console.log(Number.isInteger(23));

// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================

Math.sqrt(23); // get square root of the value

// for getting max value among the values
Math.max(4, 5, 6, 33, 45, 6, 3);
// this method does type coersion
Math.max(3, 4, "2", 4, 5);

Math.random();
// these method does type coersion
Math.trunc(); // rounding to integer
Math.ceil(); // round up
Math.floor(); // round down (but in negative number it works the other way around like round up)

// rounding decimals
// syntax = (number).toFixed(round_up_to_how_many_decimals)
(2.3).toFixed(2);

// function to generate random number from range of max and min number given
const randomInt = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + 1) + min;
};

// remainder operator '%'
// gives remainder of the division operation

const isEven = (n) => n % 2 === 0;
console.log(isEven(2));
console.log(isEven(23211211));

// numeric seperators
// use _ as a thousand seperator
// only place _ between number only (not like this = 3._22)
// only works in numbers only not while parsing string to number
const value = 234_344_222_22;
console.log(value);

// big int
// store number as large we want
// add 'n' in the end of the number
// BigInt()
// math an dlogical operation doesn't work when using big int with regular int

