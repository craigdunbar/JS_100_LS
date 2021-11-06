/* 
Alwayd Return Negative
Given a number arg return the negative, even if negative already
use Math.abs to return the absolute value
make the return value of Math.abs negative
*/
// function negative(num) {
//     return (-Math.abs(num));
// }

// using a ternary operator
function negative(num) {
    return num < 0 ? num : num * -1;
}
console.log(negative(5) === -5);
console.log(negative(-3) === -3);
console.log(negative(0) ===  -0);
console.log(negative(-0) ===  -0);