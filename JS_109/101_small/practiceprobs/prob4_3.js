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
20
define a varuable called smallest
define an empty array called result
sor tthe array into ascending order
itertate over the array and get the difference between two consecutive elements
if the difference is less than lowest 
lowest = difference and array = the current pair
return result array
*/
function closestNumbers(arr) {
  let smallest = Infinity
  let resultArr = [];
  arr.sort((a,b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    let difference = arr[i+ 1] - arr[i];
    if (difference < smallest) {
      smallest = difference;
      resultArr = [arr[i], arr[i+1]]
      // console.log(resultArr)
    }
    // console.log(difference)
  }
  return resultArr;
}
console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));  