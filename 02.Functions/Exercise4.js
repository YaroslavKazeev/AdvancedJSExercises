// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// JAVASCRIPT
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let val1=3, val2=4

let calculator = {
    v1: val1,
    v2: val2,
    read: function(val1,val2){
        return console.log(this.v1, val2)
    },
    sum: function(){
        return val1+val2
    },
    mul: function(){
        return this.v1*this.v2
    }
}

calculator.read(val1,val2)
alert(calculator.sum())
alert(calculator.mul());

