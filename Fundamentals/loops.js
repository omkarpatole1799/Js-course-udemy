"use strict";

console.log("hi, uncomment the code before using");

// ======================================================================
// ======================================================================
// for loop

// for loop runs till the codition is true

// for(let i = 1 ; i <= 10 ; i ++){
//     console.log(`count ${i}`)
// }

// coding challange #4
/*
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array */

let tipCalc;
function calcTip(bill) {
  tipCalc = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    return tipCalc;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipArr = [];
const totalBill = [];

for (let i = 0; i < bills.length; i++) {
    tipArr.push(calcTip(bills[i]));
    totalBill.push(bills[i] + tipArr[i]);
}

console.log(bills);
console.log(tipArr);
console.log(totalBill);

let sum = 0;
for (let i = 0; i < totalBill.length; i++) {
    console.log(totalBill[i]);
    sum += totalBill[i];
}

function calcAverage(sum) {
    const average = sum / totalBill.length;
    return average;
}

console.log(`total amount is ${sum}`);
console.log(`average bill is ` + calcAverage(sum));

//  ====================================================================
//  ====================================================================

const temperature = [3, -2, -8, -9, 'error', 2, 6, 10, 5, 16,2];

// find min & max values in array

function calcAmplitude(temperature){

    let minTemp = temperature[0]
    let maxTemp = temperature[0]

    for (let i = 0; i <= temperature.length; i ++){
        // eliminating error in temp reading
        if (typeof temperature[i] !== 'number') continue

        if(temperature[i] < minTemp){
            minTemp = temperature[i]
        }
        if(temperature[i] > maxTemp){
            maxTemp = temperature[i]
        }
    }
    console.log(minTemp, maxTemp)

    // now calculate temp altitude (difference between minTemp & maxTemp)

    const tempAltitude = maxTemp - minTemp
    return tempAltitude
}

console.log(calcAmplitude(temperature))


// merging two arrays

const arr1 = [3,4,5,-2]
const arr2 = [3,2,4,-5,-7]

const combineArr = arr1.concat(arr2)
console.log(combineArr)