/*
# -----------------------INSTRUCTIONS------------------------

# Create a function that takes a string as an argument and 
returns a number representing number of words that occurred 
more than once in that string.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: word must occur more than once

# Implicit: 

# --------------------------EXAMPLES-------------------------
countDuplic('one two one three two'); //=> 2
countDuplic('flower cat cat dog flower dog'); //=> 3

# ----------------------------ALGO---------------------------
# 
create an empty obj
iterate over the array
if the current element is a key in the object add one to value
else create the obj key
use the object values array to filter for values greater than 2
return the length of this array
*/
function countDuplic(str) {
  let arr = str.split(' ');
  let countObj = {};
  arr.forEach(el => {
    Object.keys(countObj).includes(el) ? countObj[el]++ : countObj[el] = 1
  })
  return Object.values(countObj).filter(num => num >= 2).length
}
console.log(countDuplic('one two one three two')); //=> 2
console.log(countDuplic('flower cat cat dog flower dog')); //=> 3