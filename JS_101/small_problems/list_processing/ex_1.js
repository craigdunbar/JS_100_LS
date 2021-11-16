/*
Question 1
Sum of Digits
Write a function that takes one argument, a positive integer, and
returns the sum of it's digits. 
Use a series of method calls to perform the sum

input: integer
output: integer

Example: sum(23); // 5

Algo
define sum function with integer param
change integer to a string
initalise a total
add the first character of the string converter to an integer to the total
add the next character of the string converter to an integer to the total
repeat for all characters of the string
*/
function sum(num) {
    let numArr = num.toString().split('');
    return numArr.reduce((previous, current) => previous + Number(current), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45