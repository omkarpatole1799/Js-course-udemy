"use strict";
// intl api

// for dates
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
};
const intlFormating = new Intl.DateTimeFormat("en-US", options).format(now);
console.log(intlFormating);

// for numbers
const options1 = {
  style: "currency",
  unit: "celsius",
  currency: "EUR",
};
new Intl.NumberFormat("en-US", options1).format();
new Inl.NumberFormat('en-US').format(value)