// We have an object storing salaries of our team:

// JAVASCRIPT
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
// Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.


let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }
let sum=0;

for (let i of Object.keys(salaries)) {
//for (let i in salaries) { - an alternative
    if (salaries.hasOwnProperty(i)) {
        sum+=salaries[i]
    }
}
console.log(sum)