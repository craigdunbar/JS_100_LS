/*
# -----------------------INSTRUCTIONS------------------------
Rotation Part 1

Write a function that takes an array parameter and rotates
the array by moving the first element to the end of the array

# --------------------------PROBLEM--------------------------

# Input: array
# Output: new array with first element of original moved to
          the end of the new array
# ---------------------------RULES---------------------------
# Explicit: do not modify the original
            if input is not an array return undefined
            if array is empty return an empty array

# Implicit: array can contain strings, numbers and objects

# --------------------------EXAMPLES-------------------------
If the argument is not an array return undefined
rotateArray();                         // undefined
rotateArray(1);                        // undefined

if the argument is an empty array return an empty array
rotateArray([]);                       // []

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
# ----------------------------ALGO---------------------------
# 
initalise a function with one parameter
check if the argument is an array
if not an array return undefined 
else if an empty array return an empty array
else 
 make a copy of the array
 use array shift to remove the first element
 use array push to add this element to the 
 end of the array
*/
function rotateArray(arr) {
  let newArr = [];
  if (Array.isArray(arr) === false) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  } else {
    newArr = arr.slice();
    let firstChar = newArr.shift();
    newArr.push(firstChar)
    return newArr;
  }
}
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined
