//requiring in the multiply function from another file
let multiply = require('./multiplying_two_numbers');

let square = (num) => multiply(num, num);

let power = (num, exp) => (exp === 1 ? multiply(num, 1) : power(num, exp - 1) * num);

// go here for David Pocsai's explanation

https://launchschool.com/exercises/5a165802
