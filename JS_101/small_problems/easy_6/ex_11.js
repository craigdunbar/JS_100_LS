/*
# -----------------------INSTRUCTIONS------------------------
# Reversed Arrays
Write a function that takes an Array argument and reverses its 
elements in place. ie mutated the array.
Can't use Array.everse()
# --------------------------PROBLEM--------------------------

# Input: array
# Output: same rray
# ---------------------------RULES---------------------------
# Explicit: must mutate the original

# Implicit: 

# --------------------------EXAMPLES-------------------------
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true
# ----------------------------ALGO---------------------------
# initialise function with array arg
initalise an iteration
reassign the elements
first arr[0] = arr[arr.length - 1]
second arr[1] = arr[length - 2]
so on until loop completes
*/
function reverse(arr) {
  let tempArr = []
  let count = 1
  for (let idx = 0; idx < arr.length; idx++) {
    tempArr[idx] = arr[arr.length - count];
    count += 1;
  }
  return arr = tempArr;
}
// LS solution
// funciton reverse(array) {
//   let leftIndex = 0;
//   let righIndex = array.length -1;

//   while (letfIndex < array.length / 2) {
//     [array[leftIndex], array[rightIndex]] = 
//     [array[rightIndex], array[leftIndex]];
//     leftIndex += 1;
//     rightIndex -= 1;
//   }
//   return array;
// }
console.log(reverse([1, 2, 3, 4]));
console.log(reverse(['a', 'b', 'c', 'd', 'e']));
console.log(reverse(['abc']));
console.log(reverse([]));