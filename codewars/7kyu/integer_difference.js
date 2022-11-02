/*
# -----------------------INSTRUCTIONS------------------------
Write a function that accepts two arguments: 
an array/list of integers and another integer (n).

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
# subarray problem
to solve all codewars problems need to sort the arr argument into ascending order
define an empty array
iterate over the given array and generate all the sub array's of 2 elmements
- slice the array starting at idx 0
-assign it to a variable sub array
- initalise andother loop
- slice the subarray starting at first element and generate subarrays of two elements long
- add all the subarrays to the empty array
loop over the new array and determine when the first element and second element
have a differrence of n
filter the new array to give only the correct result subarrays
return the length of the filtered array
*/
function intDiff(arr, n) {
  arr.sort((a, b) => a - b);
  let subsArr = [];
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr.slice(i)

    for (let count = i + 1; count < arr.length; count++) {
      let subArrs = [arr[i], arr[count]]
      subsArr.push(subArrs)
    }
  }
  return subsArr.filter(sub => sub[1] - sub[0] === n).length
}
console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4)) //, 3);
console.log(intDiff([1, 1, 3, 3], 2)) //, 4);