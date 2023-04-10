"use strict";
// dates & time
/*
1. create date
const now = new Date() // get current date and time 
2. 
newDate('Aug 01 2020 12:22:23')

// month in javascript is 0 based to we have to add +1 in date

*/
// console.log("Dates.js");
// const date = new Date().toISOString();
// date.getFullYear();
// date.getMonth();
// date.getDate();
// date.getDay();
// date.getHours();
// date.getMinutes();

// Date.now(); // gives current time stamp

// check how many days past since between two dates

const calcDaysPassed = (date1, date2) => {
  return Math.abs(Math.round(date1 - date2)) / (1000 * 24 * 60 * 60);
};
const days = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days);
