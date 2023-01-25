/*
# -----------------------INSTRUCTIONS------------------------
Write a function that accepts two arguments: 
an array of integers and another integer (n).

Determine the number of times where two integers in the array 
have a difference of n.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)

# ----------------------------ALGO---------------------------
need to determine how many pairs have a difference on n
need to iterate over the array starting at index 0
get the difference between all the other numbers and current number 
if the difference is 4 add one to the counter

define a counter with value of 0
sort array to ascending order
define a loop starting at index 0 of the array
iterate over all the other array elments 
calculate the difference between current element and start element
if result === 4 counter += 1
return counter at end
*/
function difference(arr, n) {
  let count= 0;
  arr.sort((a,b) => a - b);

  for (let i = 0; i < arr.length; i ++) {
    let start = arr[i]
    let subArr = arr.slice(i);
    for ( let j = 1; j < subArr.length; j++) {
      let current = subArr[j];
      let result = current - start;
      result === n ? count += 1 : count
    }
  }
  return count;
}
console.log(difference([1, 1, 5, 6, 9, 16, 27], 4 )) // 3
console.log(difference([1, 1, 3, 3], 2))  // 4
console.log(difference([1, 1, 3, 3], 0))  // 2

