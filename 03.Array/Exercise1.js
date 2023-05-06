// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

// The function should not modify the array. It should return the new array. For instance:

// JAVASCRIPT
// let arr = [5, 3, 8, 1]

// let filtered = filterRange(arr, 1, 4)

// alert( filtered )  // 3,1 (matching values)

// alert( arr )      // 5,3,8,1 (not modified)

let arr = [5, 3, 8, 1];
let a = 1, b = 4;

let filtered1 = function filterRange1(arr, a, b) {
  let arrf = arr;
  return arrf.filter(num => num >= a && num <= b);
}

let filtered2 = function filterRange2(arr, a, b) {
  let arrf = arr;
  return arrf.filter(checkRange);
}

function checkRange(num) {
  let c = a;
  let d = b;
  if (a > b) {
    a = d;
    b = c;
  }
  return num >= a && num <= b;
}

alert(filtered1(arr, a, b))
alert(filtered2(arr, a, b))
alert(arr)