// alert("hi");
console.log("hi, uncomment the code before using it")


//LECTURE: Values and Variables
// const country = "India";
// const continent = "Asia";
// const population = 1.4;

// console.log(country);
// console.log(continent);
// console.log(population);




/*

// coding challange 1 bmi calculator
// case 1
const markWeight1 = 78
const markHeigh1 = 1.69

const bmiMark1 = markWeight1 / (markHeigh1**2)
console.log(bmiMark1)

const jhonWeight1 = 92
const jhonHeight1 = 1.95

const bmiJhon1 = jhonWeight1 / (jhonHeight1**2)
console.log(bmiJhon1)

// checking if mark has higher bmi

const markHeigherBmi1 = bmiMark1 > bmiJhon1
console.log(markHeigherBmi1)

// case 2
const markWeight2 = 95
const markHeigh2 = 1.88

const markBmi2 = markWeight2 / (markHeigh2**2)
console.log(markBmi2)

const jhonWeight2 = 85
const jhonHeight2 = 1.76

const jhonBmi2 = jhonWeight2 / (jhonHeight2**2)
console.log(jhonBmi2)

//check if mark has heigher bmi
const markHeigherBmi2 = markBmi2>jhonBmi2
console.log(markHeigherBmi2)

*/


/*
// template literal , template literal means using backticks for string
const age = 24
const job = "student"
const college = "sitrc"

const str1 = `I'm a ${job} studying at ${college} college and I'm ${age} year old`
console.log(str1);
*/


/*
//check if you can drive or not

const ageOfPerson = 15;

if (ageOfPerson >=18){
    console.log(`you can drive your age is: ${ageOfPerson}`)
}else{
    console.log(`you have to wait for ${18-ageOfPerson} year for driving`)
}


const centuryYear = 2001;
let century;
if (centuryYear >= 2000){
    century = 21;
    console.log(`you born in ${century}th century`)
}else{
    century = 20;
    console.log(`your born in ${century}th century`)
}

*/


/*
// coding challange 2 check who's bmi is more and console log name

const markWeight1 = 78
const markHeigh1 = 1.69

const jhonWeight1 = 92
const jhonHeight1 = 1.95

const bmiMark1 = Math.round(markWeight1 / (markHeigh1**2))
const bmiJhon1 = Math.round(jhonWeight1 / (jhonHeight1**2))

if (bmiMark1 > bmiJhon1){
    console.log(`mark has greater bmi of ${bmiMark1}`)
}else{
    console.log(`jhon has greater bmi of ${jhonBmi1}`)
}
*/


// coding challange 3

// const team1 = 96+108+89
// const team1Avg = team1/3

// const team2 = 88+91+110
// const team2Avg = team2/3

// console.log(team1Avg , team2Avg )

// // compairing the average scores
// if (team2Avg > team1Avg){
//     console.log("team 2 wins")
// } else if(team1Avg > team2Avg){
//     console.log("team 1 win")
// } else {
//     console.log("tie")
// }

//  bonus 1
// const team1 = 97+11+101
// const team1Avg = team1/3
// console.log(team1Avg)

// const team2 = 109+95+123
// const team2Avg = team2/3
// console.log(team2Avg)

// if (team1Avg > 100 && team1Avg > team2Avg){
//     console.log("team 1 win")
// } else if (team2Avg > 100 && team2Avg > team1Avg){
//     console.log('team 2 wins')
// }else {
//     console.log('loose')
// }

// bonus 2
// const team1 = 97+11+101
// const team1Avg = team1/3
// console.log(team1Avg)

// const team2 = 109+95+106
// const team2Avg = team2/3
// console.log(team2Avg)

// if (team1Avg > 100 && team2Avg > 100 && team1Avg === team2Avg){
//     console.log("draw")
// }else {
//     console.log("no team wins")
// }


// coding challange #4  tip calculator 

// const billAmount = 430;

// const tip = billAmount >=50 && billAmount <=300 ? billAmount*0.15 : billAmount*0.2

// console.log(`The bill amout was ${billAmount} 
// the tip was ${tip},
// and total value is ${billAmount + tip}`)
