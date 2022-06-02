/*
# -----------------------INSTRUCTIONS------------------------

Combine Two Lists
Write a function that combines two arrays passed as arguments, 
and returns a new array that contains all elements from both 
array arguments, with each element taken in alternation.
# --------------------------PROBLEM--------------------------

# Input: two arrays
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: You may assume that both input arrays are non-empty, 
and that they have the same number of elements.

# Implicit: 

# --------------------------EXAMPLES-------------------------
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]
# ----------------------------ALGO---------------------------
# initalise an empty array 
initalise a loop that iterates one of the given arr.length times
add the first element from the first array to the new array
then add the first element from the second array
then add the second element fromt the first array
then add the second element from the second array and so on
*/
// function interleave(arr1, arr2) {
//   let newArr = [];
//   for (let count = 0; count < arr1.length; count ++) {
//     newArr.push(arr1[count], arr2[count]);
//   }
//   return newArr;
// }

// try solving with forEach, map and reduce..

// function interleave(arr1, arr2) {
//   let newArr = [];
//   arr1.forEach((el, index) => newArr.push(el, arr2[index]));
//   return newArr;
// }

// try solving with map

// function interleave(arr1, arr2) {
//   let newArr = arr1.map((el, index) => [el, arr2[index]]);
//   return newArr.flat();
// }

// try solving with map

function interleave(arr1, arr2) {
  return arr1.reduce((array, _, index) => {
    array.push(arr1[index], arr2[index]);
    return array;
  }, [])
}


console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
