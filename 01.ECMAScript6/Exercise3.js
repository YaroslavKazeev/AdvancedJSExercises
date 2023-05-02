// Exercise 3
// Look at the code. What will be result of the call at the last line and why?

JAVASCRIPT
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi()

// function sayHi() contains so-called "closure", when variables are preserved inside that function and available for different operations