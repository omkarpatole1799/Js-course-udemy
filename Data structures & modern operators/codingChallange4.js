/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �
*/

// ========================================================
// document.body.append(document.createElement('textarea'))
// document.body.append(document.createElement('button'))

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value

//   const rows = text.split('\n')

//   for (const [i, el] of rows.entries()) {
//     const seperated = el.toLowerCase().trim().split('_')
//     const [first, second] = seperated
//     const finalWord = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`
//     // console.log(finalWord)

//     // adding padding and check marks
//     console.log(`${finalWord.padEnd(25, ' ')} ${'0'.repeat(i + 1)}`)
//   }
// })

// ========================================================

// exercies no 2
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'

const splittedFlights = flights.split('+')

function getFlightName(code) {
  return code.slice(0, 3).toUpperCase()
}

for (const el of splittedFlights) {
  const details = el.split(';')

  const [type, from, to, time] = details
  console.log(
    `${type.replace('_', ' ').trim()} from ${getFlightName(
      from
    )}  to ${getFlightName(to)} time (${time.replace(':', ' h ')})`.padStart(50)
  )
}