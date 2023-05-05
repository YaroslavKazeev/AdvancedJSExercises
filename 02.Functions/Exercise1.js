// The following function returns true if the parameter age is greater than 18.
// Otherwise, it asks for a confirmation and returns its result.

// JAVASCRIPT
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }

// Rewrite it, to perform the same, but without if...else, and using arrow function.

// Code:

let checkAge= (age)=> 
    age>18 ? true : confirm('Do you have your parents permission to access this page?')

let age=30
    
    console.log(checkAge(age))