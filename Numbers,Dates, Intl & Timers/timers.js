"use strict";
// setTimeout(()=>{},miliseconds) // runs only once
// setInterval(()=>{},miliseconds) // keeps running forever after certain interval

// setTimeout(()=>{})
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Here is your pizza ${ing1}, ${ing2}`);
  },
  1000,
  "olives",
  "spinach"
);
clearTimeout(pizzaTimer); // use to clear the timer

// setInterval(()=>{},miliseconds) // this runs after every miliseconds mentioned
setInterval(() => {}, 1000);
const test = new Date();
