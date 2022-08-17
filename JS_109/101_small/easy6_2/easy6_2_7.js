/*
# -----------------------INSTRUCTIONS------------------------
Name Swapping
Write a function that takes a string argument consisting of a 
first name, a space, and a last name, and returns a new string 
consisting of the last name, a comma, a space, and the first name.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
swapName('Joe Roberts');    // "Roberts, Joe"
# ----------------------------ALGO---------------------------
# split the given string into an array of first and last name
reverse the array and then join it back with a comma delimeter
*/
// function swapName(str) {
//   return str.split(' ').reverse().join(', ')
// }
// console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Further Exploration
// What if the person has one or more middle names? 
// Refactor the current solution so that it can accommodate this; 
// the middle names should be listed after the first name:
function swapName(str) {
  let  newStr = ''
  let arr = str.split(' ')
  newStr = arr.pop() + ', ' + arr.join(' ');
  return newStr
}
console.log(swapName('Joe Smith Roberts')); 