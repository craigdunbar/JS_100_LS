/*
# -----------------------INSTRUCTIONS------------------------
All Substrings
Write a function that returns a list of all substrings of a string. 
Order the returned list by where in the string the substring begins. 
This means that all substrings that start at index position 0 should 
come first, then all substrings that start at index position 1, and so on. 
Since multiple substrings will occur at each position, return the substrings 
at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
# ----------------------------ALGO---------------------------
create the same function from previous exercise
but we need a second loop to iterate over all the letters in the given string
*/
// function substrings(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     let substring = str.slice(i);
//     for (let j = 0; j < substring.length; j++) {
//       let substrings = substring.slice(0, j +1);
//       arr.push(substrings)
//     }
//   }
//   return arr;
// }
// using leading substrings function

function leadingSubstrings(str) {
  let arr = [];
  for(let i = 0; i <str.length; i++) {
    arr.push(str.slice(0, i + 1));
  }
  return arr
}

function substrings(string) {
    let resultArr = [];
    for (let count = 0; count < string.length; count++) {
      let substring = string.slice(count);
      let substrings = leadingSubstrings(substring)
      resultArr = resultArr.concat(substrings);
    }
    return resultArr;
  }
console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]