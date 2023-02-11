/*
# -----------------------INSTRUCTIONS------------------------
Given a list of integers and a single sum value, return the first 
two values (parse from the left please) in order of appearance 
that add up to form the sum.

If there are two or more pairs with the required sum, the pair 
whose second element has the smallest index is the solution.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]
# ----------------------------ALGO---------------------------
# 

subarray problem
iterate over the array and generate the sub array starting at 0
use the subarray to then get the subarrays as pairs of elements
push the subarrays to a new array
iterate over the new array and filter them for a pair that reduces to the given integer
return the pair
if there are two compare the index of the second array eleemtn 
return the lower index pair
*/
// function sumPairs(arr, num) {
//   let newArr = [];
//   let idx = arr.length;
//   for (let i = 0; i < arr.length; i ++) {
//     let subArr = arr.slice(i) 
//     for (let j = 1; j < subArr.length; j ++) {
//       let subArrays = [subArr[0]]
//           subArrays = subArrays.concat(subArr[j])
//       newArr.push(subArrays)
//     }
//   }
//   let resultArr = newArr.filter(el => el.reduce((acc, val) => acc + val, 0) === num)
//   if (resultArr.length === 0) return undefined;

//   if (resultArr.length > 1) {
//     for( let i = 0; i < resultArr.length; i ++) {
//       currentIdx = arr.findLastIndex(num => num === resultArr[i][1])
//       if (currentIdx < idx) {
//         idx = currentIdx
//       }
//     }
//     return resultArr.filter((el => el[1] === arr[idx])).flat();
//   } else {
//     return resultArr.flat()
//   }
// }
// the cbove solution times out
// correct solution
// define an empty object
// iterate over the array and determine the result of sum - current element
// if the object contains the needed number return that number and the current element
// if not store the current element as a key in the object

// tried with an array but won't return smallest index for second
// function sumPairs(arr, sum) {
//   let copyArr = arr.slice(0)
//   for (let i = 0; i < arr.length; i++) {
//     let need = sum - arr[i];
//     copyArr.splice(i, 1)
//     if (copyArr.includes(need)) {
//       return [arr[i], need]
//     }
//   copyArr = arr.slice(0)
//   }
// }
// have to use object to build list of previusly seen numbers
function sumPairs(arr, sum){
  let numbers = {};
  for(let i = 0; i < arr.length; i++){
    // console.log(arr[i])
    let need = sum - arr[i];
    // console.log(need);
    if(numbers[need]){
      return [need,arr[i]];
    } else{ 
      numbers[arr[i]] = true;
      // console.log(numbers)
    }
  }
 }

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8)) //, [1, 7]) //, "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6)) //, [0, -6]) //, "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
console.log(sumPairs([20, -13, 40], -7)) //, undefined) //, "No Match: [20, -13, 40] should return undefined for sum = -7");
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2)) //, [1, 1]) //, "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10)) //, [3, 7]) //, "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
console.log(sumPairs([4, -2, 3, 3, 4], 8)) //, [4, 4]) //, "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
console.log(sumPairs([0, 2, 0], 0)) //, [0, 0]) //, "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
console.log(sumPairs([5, 9, 13, -3], 10)) //, [13, -3]) //, "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10")