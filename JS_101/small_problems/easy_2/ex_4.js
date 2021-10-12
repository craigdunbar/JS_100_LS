// squaring an arguement
// write a function that returns the
// square of it's argument

// let multiply = (num1, num2) => num1 * num2;
//  function square(number) {
//    return multiply(number, number);
//  }
// console.log(square(5) === 25);
// console.log(square(-8) === 64);

// further exploration
// let multiply = (num, power) => num ** power;
// nope didn't read question...
// need to use multiply function from before..

let multiply = (num1, num2) => num1 * num2;
function power( num, power) {
  total = 0
  while (power > 1) {
    total += multiply(num, num) * (power - 1);
    power -= 1;
  }
  return total
}

//using recursion
// const multiply = (num1, num2) => num1 * num2;

// function power(num, exp) {
//   if (exp === 1) {
//     return multiply(num, 1);
//   }
//   return num * power(num, exp - 1);
// }
console.log(power(3,2) === 9);
console.log(power(3, 3) === 27);