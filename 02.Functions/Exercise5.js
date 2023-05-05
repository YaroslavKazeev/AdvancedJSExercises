// Write a function min(a,b) which returns the least of two numbers a and b. Use arrow function along with the question mark operator ?

let a=5, b=4

min = (a,b) => {
    (a>b) ? m=b : m=a
    return m
}

console.log(min(a,b))