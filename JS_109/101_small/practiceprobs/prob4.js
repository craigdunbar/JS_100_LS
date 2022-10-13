/*
# -----------------------INSTRUCTIONS------------------------
Write a function that takes an array of integers and
returns the two numbers that are closest together in
value.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: two elements in an array
# ---------------------------RULES---------------------------
# Explicit: does the order of the returned array matter?

# Implicit: 

# --------------------------EXAMPLES-------------------------
[5, 25, 15, 11, 20];     // [15, 11]
[5, 11, 15, 20, 25]
11 - 5 => 6
15 - 11 => 4
20 - 15 => 5
25 -20 => 5
return 15 and 11

19, 25, 32, 4, 27, 16] => [4, 16, 19, 25, 27, 32] return 25 and 27
[12, 7, 17] => [7, 12, 17] => return 12, 7

# ----------------------------ALGO---------------------------
# define an array with two elements of value 0, to hold the two elements of the original array
define a variable called result and initalize to a value of 0
sort the array of integers into ascending order
iterate over the array
get pairs of numbers using the indexes
get the result of sbtracting the value of the higher index from the lower index
if this result is a lower number than the current result assign this number as the new result 
and push the pair of numbers to the array
after iterating through the original array
return the new array with the pair of numbers
*/
function closestNumbers(arr) {
  let pairArr = [0, 0];
  let result = 0;
  arr.sort((a, b) => a - b);
 
  for (let i = 0; i < arr.length; i++) {
    let difference  = arr[i+1] - arr[i];

    if (result === 0 || difference < result) {
      result = difference;
      pairArr = [arr[i], arr[ i + 1]]
    }
  }
  return pairArr;
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]