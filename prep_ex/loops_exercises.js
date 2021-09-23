
// Ex_1
// let rlSync = require('readLine-sync');
// let age = rlSync.question("How old are you?");
// console.log(`You are ${age}`);
// for (let i = 10; i <= 40; i += 10) {
//   console.log( `In ${i} years you will be ` + (Number(age) + i));
// }

// ex_2

// function factorial(num) {
//   let total = 1
//   for (let count = 1; count < num; count += 1) {
//     total += total * count
//   }
//   console.log(total)
// } 
//   factorial(1);
//   factorial(2);
//   factorial(3);
//   factorial(4);
//   factorial(5);
//   factorial(6);
//   factorial(7);
//   factorial(8);

// ex_3

// let counter = 0;

// while (counter = 1) { // this line is the issue counter set to 1 each iteration 
//   console.log(counter);
//   counter += 1;

//   if (counter > 2) {
//     break;
//   }
// }

// ex_4

// yes there's will be an error since no variable increment in the function expression
// for (let i = 0; i < 5;) {
//   console.log(i += 1);
// }
//  answer is : no error as the 3 components are optional

// ex_5
// my attempt...
// let result = function randomNumbersBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// for (let tries = 0; result <= 2; tries += 1) {
//   console.log("it took " + String(tries) + "tries to get a number greater than 2");
// }

// result(1, 6); => doesnt work

// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result;

// do {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// } while (result <= 2);

// console.log('It took ' + String(tries) + ' tries to get a number greater 2');

// ex_6 - need to review
function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320