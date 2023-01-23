'use strict';
console.log("hi, uncomment the code before using")


// functions

// defining function with no arguments or no parameters
// function juiceMaker(){
//     console.log("juice done")
// }

// calling function
// juiceMaker()


// defining function with arguments or parameters
// function fruitJuice(apples,oranges){
//     const juice = `Juice with ${apples} apples & ${oranges} oranges`
//     return juice
// }

// const juice = fruitJuice(2,3)
// console.log(juice)
// console.log(fruitJuice(23,3))

// function can have return value or no return values



// function decleration and function expression and arrow function

// function decleration

// function calcAge1(yearBirth){
//     const age = 2037 - yearBirth
//     return age
// }
// const age1 = calcAge1(1999)
// console.log(age1)

// // expression function
// const calcAge2 = function(yearBirth){
//     const age = 2037 - yearBirth
//     return age
// }

// console.log(calcAge2(1999))

// function decleration can be called before initialization of function
// function expression cannot be called before initialization of function

// arrow functions

// const calcAge3 = (yearBirth)=>{
//     const age = 2037 - yearBirth
//     return age
// }
// console.log(calcAge3(1999))


// arrow function doesnt have this keyword 


// // calling one function inside other function

// const fruitChop = function (fruit){
//     const fruitPiece = fruit * 4
//     return fruitPiece
// }

// const fruitJuicer = function(apples, oranges){
//     const applePieces = fruitChop(apples)
//     const orangePieces = fruitChop(oranges)

//     const juice = `Juice with ${applePieces} apple piece &
//     ${orangePieces} orange piece`
//     return juice
// }

// console.log(fruitJuicer(2,3))

// console.log("---------coding challange #1------------")
// coding challange 
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

// function calcAverage(match1, match2, match3){
//     const averageScore = (match1 + match2 + match3) / 3
//     return averageScore
// }

// data 1
// const team1Avg = calcAverage(44,23,71)
// const team2Avg = calcAverage(65,54,49)

// data 2
// const team1Avg = calcAverage(85,54,41)
// const team2Avg = calcAverage(23,34,27)

// console.log(team1Avg , team2Avg)

// function checkWinner(team1Avg , team2Avg){
//     if(team1Avg >= 2 * team2Avg){
//         console.log(`team 1 wings with average score of ${team1Avg}`)
//     }else if (team2Avg >= 2 * team1Avg){
//         console.log(`team 2 wings with average score of ${team2Avg}`)
//     }else {
//         console.log(`No team wins average score team1 = ${team1Avg} & team2 = ${team2Avg}`)
//     }
// }

// checkWinner(team1Avg , team2Avg)



// arrays 
// mutable - we can change values

// const friends = ["omkar", "yash", "suraj"]

// console.log(friends)

// function calcAge(birthYear){
//     return 2037-birthYear
// }

// const birthYearArr = [2001,1999,1996,2004,2020,2025]

// dynamically making ageArr1 by pushing values in it 
// getting values from calcAge function for push in ageArr1

// let j = 0
// const ageArr1 = []
// while (j <= birthYearArr.length-1){
//     console.log(j)
//     ageArr1.push(calcAge(birthYearArr[j]))
//     j ++
// }
// console.log(ageArr1)


// const ageArr = [calcAge(birthYearArr[0]), calcAge(birthYearArr[1]), 
//                 calcAge(birthYearArr[birthYearArr.length-1])]
//     console.log(ageArr)




// coding challange 

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data 
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from 
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

let tip
function calcTip(billAmount){
    return tip = billAmount >= 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.2
} 

const billAmountArr = [125,555,44]
// console.log(billAmountArr)

const tipArr = []
for (let i = 0; i<=billAmountArr.length-1; i++){
    tipArr.push(calcTip(billAmountArr[i]))
}
// console.log(tipArr)

const totalBill = []
for(let i = 0; i <=billAmountArr.length-1; i ++){
    totalBill.push(billAmountArr[i]+tipArr[i]);
}
// console.log(totalBill)


// object in javascript

const omkarObj = {
    firstName : "Omkar",
    lastName : "Patole",
    age : 24,
    friends : ["omkar","swaresh","yash","suraj"]
}
// console.log(omkarObj)
// console.log(typeof(omkarObj))

// console.log(omkarObj.firstName)
const nameKey = "Name"
// console.log(omkarObj['first'+nameKey])
// console.log(omkarObj.friends[1])

const stringCustom = `I'm Omkar Patole age ${omkarObj.age} I have ${omkarObj.friends.length} fridends
and my best friend is ${omkarObj.friends[3]}`
// console.log(stringCustom)

omkarObj.location = "Nashik"
omkarObj['college'] = "SITRC"
// console.log(omkarObj)


// methods of object in JavaScript

const omkarObj2 = {
    firstName: "Omkar",
    lastName: "Patole",
    birthYear: 1999,
    job: "student",
    driversLiscense : true,

    // calcAge : function (birthYear){
    //     return 2037 - birthYear
    // }

    // calcAge : function(){
    //     console.log(this)
    //     return 2037 - this.birthYear
    // }

    calcAge : function(){
        this.age = 2037 - this.birthYear
        return this.age
    },

    objectSummary : function(){
        this.summary = `${this.firstName} is a ${this.job} whose age is
        ${this.calcAge()} & 
        has ${(this.driversLiscense ? "a" : "no")} driver liscense `
        return this.summary
    }
}

// console.log(omkarObj2.calcAge(1999))
// console.log(omkarObj2['calcAge'](1999))


// console.log(omkarObj2.calcAge())


// console.log(omkarObj2.calcAge())

// console.log(omkarObj2.objectSummary())


// coding challange
/* 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall
*/

// marks object
const mark = {
    firstName : "Mark",
    lastName : "Miller",
    weight : 78,
    height : 1.69,

    calcBmi : function(){
        this.bmiMark = this.weight / (this.height * this.height)
        return this.bmiMark
    }
}

// jhons object
const jhon = {
    firstName : "Jhon",
    lastName : "Smith",
    weight : 92,
    height : 1.95,
    calcBmi : function(){
        this.bmiJhon = this.weight / (this.height * this.height)
        return this.bmiJhon
    }
}

console.log(mark.calcBmi(), jhon.calcBmi())

const exampleString = `Mark' BMI (${mark.calcBmi()}) is
${mark.calcBmi() > jhon.calcBmi() ? "higher" : "lower"} bmi 
than Jhon's BMI (${jhon.calcBmi()})`

console.log(exampleString)
