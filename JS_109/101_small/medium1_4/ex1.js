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
given the array argument 
use slice to make a copy of the array
use shift to remove the first elment and assign it to a variable
use push to add the first elment to the end of the array
if the input is empty return an empty array
- check array length 
if the input is not an array return undefined
- check Array.isArray()
*/
function rotateArray(arr) {
  if (Array.isArray(arr) === false) {
    return undefined
  } else if (arr.length === 0){
    return [];
  }

  let newArr = arr.slice(0)
  let first = newArr.shift()
  newArr.push(first);
  return newArr;
}
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); 