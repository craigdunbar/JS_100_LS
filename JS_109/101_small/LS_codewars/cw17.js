/*
# -----------------------INSTRUCTIONS------------------------
Sum of Pairs

Given a list of integers and a single sum value, return the 
first two values (parse from the left please) in order of 
appearance that add up to form the sum.

If there are two or more pairs with the required sum, 
the pair whose second element has the smallest index is the solution.

# --------------------------PROBLEM--------------------------

# Input: array and integer
# Output: array with 2 elements
# ---------------------------RULES---------------------------

# Explicit: return pair with lowest second element

# Implicit: 

# --------------------------EXAMPLES-------------------------
sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]

[1, 4, 8, 7, 3, 15], 8) //  [1, 7]

# ----------------------------ALGO---------------------------
# iterate over the array and make subarrays that contain two elements
initalise a loop starting at index 0 and ending at arr.length -1
initalise a second loop that goes from index 1 to arr.length - 1

this will give us all the subarrays from index 0
1,4  1,8  1,7 1,3 1,15 
select the subarrays that sum to a value of 10 and push to a new array
repeat this process for the subarrays starting at index 1 

this will result in an array of all the subarrays that reduce to 10

iterate over this subarray and look at the second element in each subarray
find the lowest second elment value and return it
- 

[1, 4, 8, 7, 3, 15], 8) //  [1, 7]
*/
function sumPairs(arr, num) {
  let pairsArr = [];
  let lowest = arr.length;
    let lowestPair = [];
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr.slice(i);
    for( let count = 0; count < (arr.length - (i + 1)); count ++) {
      let pair = [subArr[0], subArr[count + 1]];
      if (pair.reduce((acc, el) => acc + el, 0) === num) {
        pairsArr.push(pair);
      }
    }
  }
  pairsArr.forEach(pair => {
    if (arr.lastIndexOf(pair[1]) < lowest) {
      lowest = pair[1]
      lowestPair = pair;
    }
  });
  return lowestPair.length > 0 ? lowestPair : undefined;
}
// works for all the test cases but fails a really long one on CW's 

// here's the CW solution:

var sum_pairs=function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
}
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)) //, [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)) //, [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
console.log(sumPairs([20, -13, 40], -7)) //, undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)) //, [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)) //, [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
console.log(sumPairs([4, -2, 3, 3, 4], 8)) //, [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
console.log(sumPairs([0, 2, 0], 0)) //, [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
console.log(sumPairs([5, 9, 13, -3], 10)) //, [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");