'use strict'
console.log('Hi')

// airline 1
const luftanza = {
    airline: "Luftanza",
    shortName: "LF",
    bookings: [],
    book: function (ticketNo, personName) {
        console.log(
            `${personName} booked flight at ${this.airline}
            and ticket number is: ${this.shortName}${ticketNo}`
        )
        this.bookings.push({ flight: `${this.shortName}${ticketNo}`, personName })
    }
}

luftanza.book(233, "Omkar")
luftanza.book(234, "Suraj")
luftanza.book(235, "Yash")
console.log(luftanza.bookings)

// suppose we have new airline 
const eurowings = {
    airline: "Eurowings",
    shortName: "EW",
    bookings: []
}

// we have to use same book method in eurowings too, without repeating it
// so we have methods like .call and .apply

// first store the book method in outside

const bookTicket = luftanza.book

// 1. .call method
// now we can use .call and .apply method
bookTicket.call(eurowings, 236, "Patil")
// bookTicket.call(objectName,parameters)

console.log(eurowings.bookings)
// output : [ { flight: 'EW236', personName: 'Patil' } ]

// 2. .apply method
const personDetails = [222, "Omkar Popat Patole"]
bookTicket.apply(eurowings, personDetails)
console.log(eurowings.bookings)

// also we can use rest operator here so we dont need to use .apply method
bookTicket.apply(eurowings, [...personDetails])
console.log(eurowings.bookings)

// 3. .bind method
// this method binds the method to the object and we can use the method as regular cause it binds to it
// suppose we have to bind the book method to eurowings so we do following

const bookEW = bookTicket.bind(eurowings)
// now the book method is binded to eurowings named as bookEW and we can send ususal parameters
bookEW(444, "Patole")
console.log(eurowings.bookings)

// ============================================================

luftanza.planes = 300
luftanza.buyPlane = function () {
    console.log(this)
    this.planes++
    console.log(planes)
}

document.querySelector('.buy').addEventListener("click",
    luftanza.buyPlane.bind(luftanza))

// function returning function

function addTax(rate) {
    return function (value) {
        return value + value * rate
    }
}

const addVAT = addTax(0.23)
console.log(addVAT(100))
console.log(addVAT(23))