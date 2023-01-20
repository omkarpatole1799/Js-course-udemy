'use strict';
console.log("hi, uncomment the code before using")


// functions

// defining function with no arguments or no parameters
function juiceMaker(){
    console.log("juice done")
}

// calling function
juiceMaker()


// defining function with arguments or parameters
function fruitJuice(apples,oranges){
    const juice = `Juice with ${apples} apples & ${oranges} oranges`
    return juice
}

const juice = fruitJuice(2,3)
console.log(juice)
console.log(fruitJuice(23,3))

// function can have return value or no return values



// function decleration and function expression and arrow function

// function decleration

function calcAge1(yearBirth){
    const age = 2037 - yearBirth
    return age
}
const age1 = calcAge1(1999)
console.log(age1)

// expression function
const calcAge2 = function(yearBirth){
    const age = 2037 - yearBirth
    return age
}

console.log(calcAge2(1999))

// function decleration can be called before initialization of function
// function expression cannot be called before initialization of function

// arrow functions

const calcAge3 = (yearBirth)=>{
    const age = 2037 - yearBirth
    return age
}
console.log(calcAge3(1999))


// arrow function doesnt have this keyword 


// calling one function inside other function

const fruitChop = function (fruit){
    const fruitPiece = fruit * 4
    return fruitPiece
}

const fruitJuicer = function(apples, oranges){
    const applePieces = fruitChop(apples)
    const orangePieces = fruitChop(oranges)

    const juice = `Juice with ${applePieces} apple piece &
    ${orangePieces} orange piece`
    return juice
}

console.log(fruitJuicer(2,3))

console.log("---------coding challange #1------------")
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

function calcAverage(match1, match2, match3){
    const averageScore = (match1 + match2 + match3) / 3
    return averageScore
}

// data 1
// const team1Avg = calcAverage(44,23,71)
// const team2Avg = calcAverage(65,54,49)

// data 2
const team1Avg = calcAverage(85,54,41)
const team2Avg = calcAverage(23,34,27)

console.log(team1Avg , team2Avg)

function checkWinner(team1Avg , team2Avg){
    if(team1Avg >= 2 * team2Avg){
        console.log(`team 1 wings with average score of ${team1Avg}`)
    }else if (team2Avg >= 2 * team1Avg){
        console.log(`team 2 wings with average score of ${team2Avg}`)
    }else {
        console.log(`No team wins average score team1 = ${team1Avg} & team2 = ${team2Avg}`)
    }
}

checkWinner(team1Avg , team2Avg)