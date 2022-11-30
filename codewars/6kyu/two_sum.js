/*
# -----------------------INSTRUCTIONS------------------------
Write a function that takes an array of numbers (integers for the tests) 
and a target number. 
It should find two different items in the array that, when added together, 
give the target value. 
The indices of these items should then be returned as  [index1, index2].

For the purposes of this kata, some tests may have multiple answers; 
any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2
   or greater, and all of the items will be numbers; 
   target will always be the sum of two different items from that array).

# --------------------------PROBLEM--------------------------

# Input: array and integer
# Output: array
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

# ----------------------------ALGO---------------------------
# get all the subarray combinations of the array argument
reduce all the subarrays and check if they === the integer argument
return the subarray that does
*/
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i ++) {
    let subArr = numbers.slice(i)
    for (let j = 1; j < subArr.length; j++) {
      let sum = subArr[0] + subArr[j]
      if (sum === target) {
        let index1 = numbers.indexOf(subArr[0]);
        let index2 = numbers.indexOf(subArr[j], index1 + 1); 
        // let index1 = numbers.findIndex(num => num === subArr[0]);
        // let index2 = numbers.findLastIndex(num => num === subArr[j])
        // findLastIndex didn't work at first as my version of node was too old
        return [index1, index2]
      }
    }
  }
//   for (var i = 0; i < numbers.length-1; i++) {
//     for (var j = i+1; j < numbers.length; j++) {
//         if (numbers[i] + numbers[j] === target) return [i, j];
//     }
// }
}
console.log(twoSum([1,2,3],4)) //    [0,2]],
console.log(twoSum([1234, 5678, 9012], 14690)) // [1,2]],
console.log(twoSum([2,2,3], 4)) //     [0,1]],
console.log(twoSum([2,3,1], 4)) //     [1,2]]