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
gdefine a vairable called closest
define an array called pair 
sort the array into ascending order 
iterate over the array
on each iteration subtract the previous element value from the current value
if the result is smaller than the closest variable
reassign closest with the result
reassign pair to the current pair
after the iteration return the pair as an array
*/
function closestNumbers(arr) {
  let closest = Infinity
  let pair = [];
  
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let result = arr[i + 1] - arr[i];
    if (result < closest) {
      closest = result;
      pair = [arr[i + 1], arr[i]]
    }
  }
  return pair;
}


console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));      