// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// JAVASCRIPT
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// P.S. In this task the function should support only natural values of n: integers up from 1.

// JScode:
let x=5
let n=0
let nn=n
let result=x

function pow(x,n) {
    if (n<1|!Number.isInteger(n)==true) console.log('The function raises a number to a power. The exponent must be an integer greater than 0') 
    else if (nn==1) {return result}
    else {
        nn=nn-1;
        result=x*(pow(x,nn))
        return result
    }
}

console.log(`${x} to the power of ${n} is equal to ${pow(x,nn)}`)

