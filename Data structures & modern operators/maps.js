'use strict'
console.log("maps")

// let prompt = require('prompt-sync')()

// const answer = prompt("Name: ??")
// console.log(`Hello ${answer}`)

// creating new map 
const restraunt = new Map();

// set property sets the key and value to the map
// we can chain multiple set property at once 
restraunt
.set('firstName', "Omkar")
.set("lastName","Patole")
.set("location", "Nashik")
.set("food",["Pizza","Burger","Coffee"])

console.log(restraunt)

// getting property from set

console.log(restraunt.get("firstName"))
console.log(restraunt.get("location"))

restraunt
.set("open",11)
.set("close",21)
.set(true,"restraunt is open")
.set(false,"restraunt is close")

// we can set boolean property for the map
// using boolean property we can perform operation and return values according to it

const time = 15


console.log(
    restraunt.get(
        time > restraunt.get("open") &&
        time < restraunt.get("close"))
)

/*
in above example time > restraunt.get("open") &&
time < restraunt.get("close")  return true or false
based on time provided
for if its true then it becomes restraunt.get(true)
so, true property gets executed in the restraunt map*/

// consider object
const obj1 = {
    firstName : "Omkar",
    lastName : "Patole",
    hotelName : "Omkar's Food place",
    location : "Nashik",
    food : ["Indian","Italian","Japnease"]
}

// consider new map

const question = new Map([
    ["question","Which is best programming language?"],
    [1,"c"],
    [2,"c++"],
    [3,"Java"],
    ["correct", 3],
    [true, "correct"],
    [false, "wrong"]
])

// converting objects to maps
const newMap = new Map(Object.entries(obj1))
console.log(newMap)

console.log(question)

for (const [key,value] of question){
    if (typeof key === "number"){
        console.log(`Option ${key}, : ${value}`)
    }
}

// const answer = Number(prompt(question.get("question")))

// console.log(answer)

// if(question.get("correct") === answer){
//     console.log(question.get(true))
// } else {
//     console.log(question.get(false))
// }

// console.log(question.get((question.get("correct") === answer)))

console.log([...question])
console.log([...question.entries()])
console.log([...question.keys()])
console.log([...question.values()])