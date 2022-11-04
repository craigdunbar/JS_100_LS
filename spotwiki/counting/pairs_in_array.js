/*
# -----------------------INSTRUCTIONS------------------------

Create a function that takes an array as an argument and 
returns an new array containing all of the array elements 
that appears twice

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
appearTwice([1, 2, undefined, 'hello', 2, undefined]); //=> [2, undefined];

# ----------------------------ALGO---------------------------
# create a countObj
iterate over the array
if the current arr element is a key in the object add one to the value
else create the new key
iterate over the object keys array and filter for values === 2
return the filtered array
*/
function appearTwice(arr) {
  let countObj = {};
  arr.forEach(el => {
    Object.keys(countObj).includes(String(el)) ? countObj[el]++ : (countObj[el] = 1);
  })
  return Object.keys(countObj).filter(key => countObj[key] === 2)
}
console.log(appearTwice([1, 2, undefined, 'hello', 2, undefined])); //=> [2, undefined];