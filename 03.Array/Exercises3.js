// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

// The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

// JAVASCRIPT
// let john = { name: "John", age: 25 }
// let pete = { name: "Pete", age: 30 }
// let mary = { name: "Mary", age: 29 }

// let arr = [ john, pete, mary ]

// alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }
let arr = [ john, pete, mary ]
let sum=0
let n=0

function getAverageAge(arr) {
    arr.forEach(element => {
        sum=sum+element.age
        n++
        Avrg=sum/n
    })
    return Avrg;
}

alert( getAverageAge(arr) )  