/*
# -----------------------INSTRUCTIONS------------------------
You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.

Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10

# --------------------------PROBLEM--------------------------

# Input: array
# Output: integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.
# ----------------------------ALGO---------------------------
# 
define an empty array called results

[1, 2, 3, 5, 7, 9] ==> 5
start an iteration with count at 1
start at arr[0] => 1 and add 1 === 2
is there a 2 in the array, is there a 3 in the array, if so push [1 ,2, 3]
arr[0] + count (2) === 3, check array for 3 and 5 => true => push [1, 3, 5]
arr[0] + count(3) === 4 check for 4 => false
arr[0] + count (4) === 5 check for 5, and 9 => true push [1, 5, 9]
arr[0] + count(5) === 6 check for 6, false
arr[0] + count(6) === 7 check for 7 and 13 => false // stop iteration here?
arr[0] + count(7) === 8 check for 8 false
arr[0] + count(8) === 9 check for 9 and 17 false

so results array would have [[1, 2, 3], [1, 3, 5], [1, 5, 9]] so far

then move to arr[1]
2, 3, 4 false
2, 4, 6 false
2, 5, 8 false
2, 6, 10 false

results array unchanged

move to arr[2]
3, 4, 5 flase
3, 5, 7 true
3, 6, 9 false
3, 7, 11 false // stop iterting

results array = [[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7]]

repeat with arr[3]
5, 6, 7 false
5, 7, 9 true
5, 8, 11 false stop iterating

results array = [[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], [5, 7, 9]]

stop iterating at [arr.length - 2] as we can make any more 3 digit arrays
[1, 2, 3, 5, 7, 9]

so we need one loop to count the elements in the arr 
in this case arr = [1, 2, 3, 5, 7, 9]
arr.length = 6 
so only need to loop up until arr.length - 2 === 4
on first iteration we work with arr[0]
need a second loop to find all the subarrays starting at arr[0]
arr[0] = 1 , arr[0] + 2 etc up to arr[0] + arr.length
does array include arr[0] + count && arr[0]+ count * 2
if true push [arr[0], arr[0] + count, arr[0] + count *2] to results array


*/
function progressions(arr) {
  let results = [];

  for (let idx= 0; idx < arr.length; idx ++) {
    let current = arr[idx];
    for (let count = 1; count < arr[arr.length - 1]; count ++) {
      if (arr.includes(current + count) && arr.includes(current + (count * 2)))
      results.push([current, current + count, current + (count * 2)])
    }
  }
  return results.length;
}
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10