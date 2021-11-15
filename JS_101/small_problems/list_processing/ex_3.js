/*
Multiply all pairs

Write a function that takes two array arguements, each containing a list of
numbers, and returns a new array containing the prducts of all combinations 
of number pairs that exist between the two arrays. The returned array should
be sorted in ascending numerical order.
Input: two arrays
output: array

Example: multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
2 * 4 = 8
2 * 3 = 6
2 * 1 = 2
2 * 2 = 4
4 *4 = 16
4 * 3 = 12
4 * 1 = 4
4 * 2 = 8
2, 4, 4, 6, 8, 8, 12, 16

Algo
Initialise a function with two array params
initialise an empty array
iterate over first array
iterate over second array
multiply each element in first array by each element of second array
add each result to the new array
sort the new array
return the sorted array

*/
function compareNumbers(a, b) {
    return a - b;
}

function multiplyAllPairs(arr1, arr2) {
    let newArr =[]
    arr1.forEach((num1 => {
        arr2.forEach((num2) => {
            newArr.push(Number(num1 * num2));
        });
        return newArr;
    }));
    return(newArr.sort(compareNumbers)); 
    // return newArr.sort((a, b) => a - b); 
}
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]