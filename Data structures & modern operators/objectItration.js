'use strict'

const { on } = require("nodemon")

const openingHours = {
    fri: {
        open: 9,
        close: 22
    },
    sat: {
        open: 11,
        close: 20
    },
    sun: {
        open: 8,
        close: 23
    }
}

const restraunt = {
    founder: "omkar patole",
    location: "Nashik",
    friends : ["suraj","yash"],
    openingHours: {
        fri: {
            open: 9,
            close: 22
        },
        sat: {
            open: 11,
            close: 20
        },
        sun: {
            open: 8,
            close: 23
        }
    },
    orderPizza() {
        return "Pizza ordered"
    }
}

const frds = restraunt.friends.entries()
const frds2 = Object.entries(restraunt.friends)
const entries1 = Object.entries(restraunt.openingHours)

for(const [i,name] of frds2){
    console.log(i,name)
}

for(const [day,{open,close}] of entries1){
    console.log(
        `on ${day} we open at ${open} and close at ${close}`
    )
}

console.log(entries1)
for (const [i,name] of frds){
    console.log(i,name)
}

// object itration

const keys1 = Object.keys(openingHours)

// console.log(keys1)
let myStr = `we are open in ${keys1.length} of week: `
// printing individual key
for (const day of keys1){
    myStr += ` ${day}, `
}
console.log(myStr)

const entries = Object.entries(openingHours)
console.log(entries)

for (const [day,{open,close}] of entries){
    console.log(
        `on ${day} we open at ${open} and close at ${close}`
    )
}

const values = Object.values(openingHours)
console.log(values)


