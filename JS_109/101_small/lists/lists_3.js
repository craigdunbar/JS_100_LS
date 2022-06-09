/*
# -----------------------INSTRUCTIONS------------------------

Multiply All Pairs

Write a function that takes two array arguments, each containing a 
list of numbers, and returns a new array containing the products
of all combinations of number pairs that exist between the two arrays. 
The returned array should be sorted in ascending numerical order.

# --------------------------PROBLEM--------------------------

# Input: two arrays
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: 
You may assume that neither argument will be an empty array.
# Implicit: 

# --------------------------EXAMPLES-------------------------
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
# ----------------------------ALGO---------------------------
# given the two array arguments 
define a new empty array
initalise a loop to iterate over one of the arrays
within this loop initalise a second loop to iterate over every element of the
second array
mulitply the element of the first array by all the elements in  the second array
and add the return value to the new array
sort the new array and return it.

sort the 
*/
// function multiplyAllPairs(arr1, arr2) {
//     let result = [];
//     for (let idx = 0; idx < arr1.length; idx++) {
//         let el = arr1[idx];
//         for (let count = 0; count < arr2.length; count++) {
//             let multiple = arr1[idx] * arr2[count];
//             result.push(multiple);
//         }
//     }
//     return result.sort((a, b) => a - b); 
// }

// using forEach
function multiplyAllPairs(arr1, arr2) {
    let result = [];
    arr1.forEach(number1 => {
        arr2.forEach(number2 => {
            result.push(number1 * number2)
        });
    });
    return result.sort((a, b) => a - b);
}
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
