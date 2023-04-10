'use strict'

const restraunt = {
    founder : "omkar patole",
    location : "Nashik",
    openingHours : {
        fri : {
            open : 9,
            close : 22
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
    orderPizza(){
        return "Pizza ordered"
    }
}

/*
// optional chaining
1. this (?) checks if the property exsists then only proceed further 
    else return undefined
2. in this example we check if openingHours property exsists if it doesn't 
    then it not proceed further 
3. immediately returns undefined so we used ?? (nullish operator) 
4. nullish operator return "not avaliable" in the following 
    if result of operation is nullish"
*/ 
const check = restraunt.openingHours?.mon?.open ?? "Not avaliable"
// console.log(check)

// another example
// here we are checking if the orderPizza method exsists (using ?)
// if it does't (using ??) then we done take order for pizza prints
console.log(restraunt.orderPizza?.() ?? "We dont take order for pizza")


console.log(restraunt.orderPasta?.() ?? "We done have order for pasta")


const days = ["mon","tue","wed","thu","fri","sat","sun"]

for (const day of days){
    // check opening hours of restraunt on each day
    const open = restraunt.openingHours[day]?.open ?? "We are closed"
    // also print day and opening hours on each day
    console.log(
        `On ${day} we open at ${open}`
    )
}