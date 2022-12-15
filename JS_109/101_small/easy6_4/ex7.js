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

# --------------------------EXAMPLES-------------------------
swapName('Joe Roberts');    // "Roberts, Joe"
# ----------------------------ALGO---------------------------
split the name string into an array of words
reverse the array and join with a comma
*/
function swapName(name) {
  return name.split(' ').reverse().join(', ')
}
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"