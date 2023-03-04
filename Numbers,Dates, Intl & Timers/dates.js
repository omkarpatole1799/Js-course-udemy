// dates & time
/*
1. create date
const now = new Date() // get current date and time 
2. 
newDate('Aug 01 2020 12:22:23')

// month in javascript is 0 based to we have to add +1 in date

*/

const date = new Date().toISOString();
date.getFullYear();
date.getMonth();
date.getDate();
date.getDay();
date.getHours();
date.getMinutes();

Date.now(); // gives current time stamp
