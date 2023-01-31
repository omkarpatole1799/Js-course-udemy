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
    }
}

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