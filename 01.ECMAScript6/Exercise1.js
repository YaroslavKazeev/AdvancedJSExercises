// We have a simple object:

// JAVASCRIPT
// let user = {
//   name: "John",
//   years: 30
// }
// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false if absent)

let user = {
  name: "John",
  years: 30
}

let {name, years} = user;
let isAdmin = user.hasOwnProperty('isAdmin')

console.log(name,years,isAdmin)