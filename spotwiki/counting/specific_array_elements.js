/*
# -----------------------INSTRUCTIONS------------------------
Create a function that takes an array and a string as an arg
and returns the number of occurences of the string in the 
array

# --------------------------PROBLEM--------------------------

# Input: array and string
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
countEle(['name', 'year', 'age', 'name'], 'name'); // => 2
countEle([1,2,3,4,5,1,2,3,4], '2'); //=> 2

# ----------------------------ALGO---------------------------
# use filter to get an array of only the elements that match 
the second arg
get the lenght of this array
*/
function countEle(arr, str) {
  return arr.filter(el => String(el) === str).length
}
console.log(countEle(['name', 'year', 'age', 'name'], 'name')); // => 2
console.log(countEle([1,2,3,4,5,1,2,3,4], '2')); //=> 2