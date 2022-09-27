/*
# -----------------------INSTRUCTIONS------------------------
Rotation (Part 1)
Write a function that rotates an array by moving the first element 
to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: If the input is not an array, return undefined.
If the input is an empty array, return an empty array.

# Implicit: 

# --------------------------EXAMPLES-------------------------a
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []
# ----------------------------ALGO---------------------------
# 
use array slice to creat a copy of the original array starting from 
index 1. then concat the element at index 0 to the end of the array
return this new array
*/
function rotateArray(arr) {
  if (arr.length === 0) {
    return [];
  } else if (Array.isArray(arr) === false) {
    return undefined;
  }
  return newArr = arr.slice(1).concat(arr[0]);
}
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []
console.log(rotateArray(17));    