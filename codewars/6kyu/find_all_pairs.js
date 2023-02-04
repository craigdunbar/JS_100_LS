/*
# -----------------------INSTRUCTIONS------------------------
You are given array of integers, your task will be to count all 
pairs in that array and return their count.

Notes:

    Array can be empty or contain only one value; in this case return 0
    If there are more pairs of a certain number, count each pair only once. 
    E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
    Random tests: maximum array length is 1000, range of values in 
    array is between 0 and 1000


# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: empty array or one value return 0
            count each pair only once

# Implicit: 

# --------------------------EXAMPLES-------------------------
[1, 2, 5, 6, 5, 2]  -->  2

...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4

...because there are 4 pairs: 2, 20, 6 and 2 (again) 

# ----------------------------ALGO---------------------------
#  
define a counter = 0
get the unique values of the array
iterate over the unique values and use filter to select only the similar values
use math.floor and filter.length to dtermine how many pairs there are
add this redult to a counter
return the counter
*/
function duplicates(arr) {
  let counter = 0;
  let unique = [...new Set(arr)]
  unique.forEach(el => {
    let occur = Math.floor(arr.filter(num => num === el).length / 2)
    if (occur >=1 ) {
      counter += occur
    }
  })
  return counter;
}

console.log(duplicates([1, 2, 5, 6, 5, 2])) //,2 );
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])) //,4 );
console.log(duplicates([0, 0, 0, 0, 0, 0, 0])) //,3 );
console.log(duplicates([1000, 1000])) //,1 );
console.log(duplicates([])) //,0 );
console.log(duplicates([54])) //,0 );