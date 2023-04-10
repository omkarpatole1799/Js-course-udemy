'use strict'
console.log('======================')
console.log('strings')

const airline = 'OMKAR Air Lines Nashik'
const ticket = '11B36'
const seat = '2B'

// this slice the string starting from index 5 upto the end of string
console.log(airline.slice(5))

// this gives the last charactor of string
console.log(airline.slice(-1))

// in this (a,b) a = starting , b = ending
console.log(airline.slice(0, 6))

// gives the index of first occurance of the charactor
console.log(airline.indexOf('A'))

// gives the index of last occurance of the charactor
console.log(airline.lastIndexOf('A'))

// this slices from index 6 upto the occurance of 's' charactor
console.log(airline.slice(6, airline.indexOf('s')))

function checkLocationOfSeat(seatNo) {
  const s = seatNo.slice(-1)
  s === 'A' && console.log('Left Seat')
  s === 'B' && console.log('Middle Seat')
  s === 'C' && console.log('Right Seat')

  s === 'D' && console.log('Left Seat')
  s === 'E' && console.log('Middle Seat')
  s === 'F' && console.log('Right Seat')
}

checkLocationOfSeat('11B')
checkLocationOfSeat('11E')
checkLocationOfSeat('11A')
checkLocationOfSeat('11C')

// includes method check if certain word or string provided is includes or not
const myString =
  "I'm Omkar Patole, styding in final year BE electrical Engineering"
console.log(myString.toUpperCase()) // return string in uppercase
console.log(myString.toLowerCase()) // return string in lower case
console.log(myString.includes('Omkar')) // this returns true

function checkIfpersonAllowed(items) {
  const myStr = items.toLowerCase()
  if (myStr.includes('knife')) {
    console.log('sorry you are not allowed')
  } else {
    console.log('welcome')
  }
}

checkIfpersonAllowed('I have food and snacks with me')
checkIfpersonAllowed('I have safety knife and some cloths')

// replacing charactor in string
// replace take two parameters (a,b) a = value to be replace, b = new value

const moneyInEuro = '223,36£'
const moneyInUSD = moneyInEuro.replace('£', '$').replace(',', '.')
console.log(moneyInUSD)

// split method - this return an array after splitting string
const nameStr = 'A+nice+string'
console.log(nameStr.split('+'))

const nameString = 'Omkar Patole'
console.log(nameString.split(' '))
const [firstName, lastName] = nameString.split(' ')

// join method joing the string or in this case the array and returns a string
const newName = ['Mr.', firstName, lastName].join(' ')
console.log(newName)

function capitalName(name) {
  const n = name.toLowerCase().split(' ')
  const n1 = []

  //   for (const name1 of n) {
  //     n1.push(name1[0].toUpperCase() + name1.slice(1))
  //   }

  for (const name1 of n) {
    n1.push(name1.replace(name1[0], name1[0].toUpperCase()))
  }

  console.log(n1.join(' '))
}
capitalName('omkAr PatOle')

// padStart(a,b) and padEnd(a,b)
//  a = starting value to be padded
//  b = what to pad with
//  padStart(30,"+")
//  here it will pad with 30 charactor at starting with '+' sign same for padEnd

const funString = 'Go to gate 23!'
console.log(funString.padStart(25, '+'))
console.log(funString.padEnd(25, '+'))

function maskCardNumber(number) {
  const str = number + ''
  const last4Digit = str.slice(-4)
  console.log(last4Digit.padStart(str.length, '*'))
}

maskCardNumber(123456789)
