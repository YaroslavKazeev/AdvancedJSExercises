// Replace Function Expressions with arrow functions in the code:

// JAVASCRIPT
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed.") },
//   function() { alert("You canceled the execution.") }
// )

// JScode:

ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no()
}

console.log(ask (
  "Do you agree?",
  () => { alert("You agreed.") },
  () => { alert("You canceled the execution.") }
))

