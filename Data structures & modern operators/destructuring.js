'use strict'

// lets take simple array
// const arr1 = [1,2,3]
// // now to destructure it
// const [x,y,z] = arr1  // x,y,z is storing elements from array
// console.log(x,y,z)

// const [a, ,c] = arr1  // skipping the middle element 
// console.log(a,c)

// // suppose we have array inside array
// const arr2 = [1,2,[4,5]]
// const [q,e,r] = arr2  // normal destructure
// console.log(q,e,r,)  // here r = [4,5]
// const [p,o,[n,m]] = arr2  // destructure array inside array
// console.log(p,o,n,m) // here n,m = 4,5 its destructure array inside array


const restraunt = {
	restrauntName: "Omkar's Food Place",
	location: "Nashik",
	category: ["Indian", "Italian", "European"],
	starters: ["Papdi", "Sandwich", "Coffee"],
	mainCourse: ["Thali", "Burger", "Pizza"],
	order: function (categoryIndex, startersIndex, mainCourseIndex) {
		// this function takes indexes from category, starters, mainCourse
		// returns the order
		return [this.category[categoryIndex], this.starters[startersIndex],
		this.mainCourse[mainCourseIndex]]
	},
	// we can pass objet as arguments for function and destructure it
	delivery: function ({ time, location, categoryIndex, startersIndex, mainCourseIndex }) {
		return `Order confirmed! time: ${time}, location: ${location},
		category is : ${this.category[categoryIndex]},
		starter is : ${this.starters[startersIndex]},
		main course is: ${this.mainCourse[mainCourseIndex]}`
	}
}

// array destructuring
// const myArr = restraunt.order(0,2,1)
// console.log(myArr)

// const [category, starters, mainCourse] = myArr
// console.log(category, starters, mainCourse)

// object destructuring
// const {restrauntName, location1,category,starters} = restraunt

// default values
const { restrauntName = [], location1 = [], category = [],
	starters = [] } = restraunt
// [] gives the default values

console.log(location1, category, starters)

// passing an object to function arguments

const delivery = restraunt.delivery({
	time: "22;00",
	location: "Nashik",
	categoryIndex: 2,
	startersIndex: 1,
	mainCourseIndex: 0
})
console.log(delivery)

// giving custom names to property of object in destructuring

const { 
	hotelName = [],  // assigning default value 
	category : foodType,
	starters : starting,
	mainCourse : dinner
} = restraunt

console.log(hotelName, foodType, starting,dinner)