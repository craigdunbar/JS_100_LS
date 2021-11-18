/*
All substrings

Write a function that returns a list of all substrings of a string.
Order the returned list by where in the string the substring begins.
All substrings that start at index position 0 are first, then index position 1
would be next and so on..
Substring from the given position should go from shortedt to longest

Input: string
Output: array of strings

Example : 
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
  
  Algo:
  define a function with string paramater
  turn the string into an array of letters
  initalise an empty array to hold the substrings
  use a loop to iterate through the letters
  use map to generate a subarray of all the sbstrings
  return the subarray
  return the flattened substring array 
*/
function substrings(str) {
    let totalArr = []
    let letters = str.split('');
    let substringArr = [];
    letters.forEach((letter) => {
        console.log(letter)
        substringArr = letters.map((char, index) => str.slice(letter,index + 1));
        console.log(substringArr);
        totalArr.push(substringArr);
    });
    return totalArr
    };
    
    console.log(substrings('abcde'));