/*
# -----------------------INSTRUCTIONS------------------------
# Multiply lists
Write a funciton that takes two array arguments
and return an array that contains the product of
the pairs of numbers at the same index form the two arrays

# --------------------------PROBLEM--------------------------

# Input: array
# Output: array
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: arr not empty, all integers greater than 0

# --------------------------EXAMPLES-------------------------
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]
# ----------------------------ALGO---------------------------
# initalise function with two array args
iterate through the first array
add the elements of second array to first array
add to new array at same element
repeat for all elements
print the new array
*/
function multiplyList(arr1, arr2) {
    let newArr = arr1.map((_, index) => {
        return (arr1[index] * arr2[index])
    });
    return newArr;
}
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77])