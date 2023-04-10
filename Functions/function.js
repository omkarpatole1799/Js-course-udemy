'use strict'

// here we can pass defult values in arguments so that we dont get undefined value
// arguments can also be used to perform actions i.e. here price = 199 * noOfPassanger whicch is passed in arguments

const flightBooking = function (
  flightNo,
  noOfPassanger = 1,
  price = 199 * noOfPassanger
) {
  const booking = {
    flightNo,
    noOfPassanger,
    price,
  }
  console.log(booking)
}

// when no arguments are passed output is undefined
// flightBooking()

// only one argument is passed
// flightBooking('LS1203')

// only two arguments are passed
// flightBooking('LS1203', 2)

// all agruments passed
// flightBooking('LS1203', 2, 199)

// if we have to skip one arguments we have to mention that argument undefined
// here undefined is passed hence we can skip the argument and it takes default argument from the functions argument i.e. '1' in this case
// flightBooking('LS1203', undefined, 205)

// Higher order functions =
// this simply means function recives other function
// as argument and returns new function
const myString = 'javascript is best!'
const toUpperCaseFunction = function (str) {
  const [first, ...other] = str.split(' ')
  return [first.toUpperCase(), ...other].join(' ')
}
// console.log(toUpperCaseFunction(myString))

// this is higher order function
// calling other function inside this function
const transform = function (str, fn) {
  console.log(`Before transform: ${str}`)
  console.log(fn(`After transform : ${fn(str)}`))
}

console.log(transform(myString, toUpperCaseFunction))

function high5([...name1]) {
  const [first, ...other] = name1
  console.log(first + other)
  console.log(`hi ${name1}`)
}

;['Omkar', 'Suraj', 'yash'].forEach(high5)

// functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`)
//   }
// }

// here when I call greet function it returns function
// so that function is stored in 'returnedFunction'
// hence 'returnedFunction' is also a function
// and we can use it, i.e. here we have passed arguments in there

// const returnedFunction = greet('hi')
// returnedFunction('omkar')

// greet('Hello')('omkar')

const greet = greeting => name11 => console.log(`${greeting}, ${name11}`)
const newFunction = greet('HI!!')
newFunction('Omkar')
