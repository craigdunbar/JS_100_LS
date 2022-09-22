/*
# -----------------------INSTRUCTIONS------------------------
Name Swapping
Write a function that takes a string argument consisting of a 
first name, a space, and a last name, and returns a new string 
consisting of the last name, a comma, a space, and the first name.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string in different config
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
swapName('Joe Roberts');    // "Roberts, Joe"
# ----------------------------ALGO---------------------------
# split the string into an array of names
reverse the array and then join uisng a comma delimiter
*/
// function swapName(str) {
//   return str.split(' ').reverse().join(', ');
// }
// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Further Exploration
// What if the person has one or more middle names? 
// Refactor the current solution so that it can accommodate this; 
// the middle names should be listed after the first name:
function swapName(str) {
  let arr = str.split(' ');
  let newArr = [];
  newArr.push(arr[0].concat(' ' + arr[1]));
  newArr.push(arr[2]);
  return newArr.reverse().join(', ');
}
console.log(swapName('Joe Smith Roberts'));    // "Roberts, Joe Smith"