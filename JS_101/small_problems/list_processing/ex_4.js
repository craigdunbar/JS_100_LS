/*
Leading substrings

Write a function that takes a string arguement and returns a list of
substrings of that string. Each substring should begin with the first 
letter of the word, and the list should be ordered from shortest to longest.

input: string
Output: array of strings

Example: leadingSubstrings('abc');      // ["a", "ab", "abc"]

Algo
initalise a function with a string param
initalise an empty array
iterate over the string returning the substrings 
start with the fist letter and end woth the full string
*/
// function leadingSubstrings(str) {
//   let arr = [];
//   for (let idx = 0; idx < str.length; idx++) {
//     arr.push(str.slice(0, str.length - idx));
//   }
//   return(arr.reverse());
// }

// further exploration without for loop

// function leadingSubstrings(str) {
//   newArr = str.split('').map((char, index) => {
//     return str.slice(0,index + 1);
//   });
//   return newArr;
// }

// refactored
function leadingSubstrings(str) {
return str.split('').map((char, index) => str.slice(0,index + 1));
}

console.log(leadingSubstrings('abc')); //===["a", "ab", "abc"]);
console.log(leadingSubstrings('a')); // === ["a"]);
console.log(leadingSubstrings('xyzzy')); // === ["x", "xy", "xyz", "xyzz", "xyzzy"]);