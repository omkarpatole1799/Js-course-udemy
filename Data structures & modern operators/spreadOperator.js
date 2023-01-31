const restraunt = {
    restrauntName: "Omkar's food place",
    foundedIn: 1999,
    category: [
        "Indian",
        "Italian",
        "French"
    ],
    starters: [
        "Soup",
        "Expresso",
        "Sandwitch"
    ],
    mainCourse: [
        "Thali",
        "Pasta",
        "Pizza"
    ],
    orderPasta: function (ing1, ing2, ing3) {
        return console.log(`Pasta ready with ${ing1}, ${ing2}, ${ing3}`)
    },
    orderPizza : function(ing1, ...otherIng){
        const item1 = ing1
        const otherIng1 = otherIng
        return console.log(item1, otherIng1)
    }
}

// =======================================================================
// rest operator
// this packs all the elements into array
// this works on left side of =

const myArr = [1,2,3,4,5,6]
const [a,b,...otherElements] = myArr  // here a,b are 1,2 and remaining elements are packed into otherElements
console.log(a,b,otherElements)

const [
    category, 
    mainCourse,
    ...otherFood
] = [
    ...restraunt.category,
    ...restraunt.mainCourse,
]

console.log(
    category,
    mainCourse,
    ...otherFood
)


// passing many arguments to functions
function add(...numbers){
    let sum = 0
    for (let i = 0 ; i <numbers.length; i ++){
        sum += numbers[i]
    }
    console.log(sum)
}

add(2,3,34)
add(3,5,6,8,6,4)

// also we can store all elements into array and then (pack)  & send using rest operator
const numbers = [3,154,5,3,2,3]
const [...x] = numbers
add(...x)


restraunt.orderPizza("garlic","onion", "mushrooms", "cheese")



// =======================================================================
// spread operator
// this spreads all elements into an array
// this works on right side of =
/*

console.log(
    restraunt.category
)

// adding more elements to the array using spread operator
const newCategory = [
    ...restraunt.category,
    "South Indian"
]
console.log(newCategory)

// combining two array using spread operator
const categoryAndStarters = [
    ...restraunt.category,
    ...restraunt.starters
]
console.log(categoryAndStarters)

const ingredients = [
    // prompt("element 1"),
    // prompt("element 2"),
    // prompt("element 3")
]

console.log(ingredients)

// sending the arguments of function using spread operator
restraunt.orderPasta(
    ...ingredients
) 


// copying the whole object using speead operator
// this makes shallow copy only

const newRestraunt = {
    ...restraunt,
    restrauntName: "Patole",
    location: "New Nashik"
}

const copyRestraunt = {
    ...restraunt
}
console.log(copyRestraunt)

console.log(restraunt.restrauntName)
console.log(newRestraunt.restrauntName)
*/ 
// =======================================================================