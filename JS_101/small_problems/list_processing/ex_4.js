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
function leadingSubstrings(str) {
    let arr = [];
    // let count = 0
    for (let idx = 0; idx < str.length; idx++) {
        arr.push(str.slice(0, str.length - idx));
        // arr.push(str.slice(count, count + 2));
        // arr.push(str.slice(count, count + 3));
    }
    return(arr.reverse());
}

console.log(leadingSubstrings('abc')); //===["a", "ab", "abc"]);
console.log(leadingSubstrings('a')); // === ["a"]);
console.log(leadingSubstrings('xyzzy')); // === ["x", "xy", "xyz", "xyzz", "xyzzy"]);