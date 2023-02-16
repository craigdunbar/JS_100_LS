/*
# -----------------------INSTRUCTIONS------------------------
Bubble sort

Write a function that takes an array argument ans sorts that
array using the bubble sort algorithm.
The sorting should be done "in-place" — that is, the function should 
mutate the array. 
You may assume that the array contains at least two elements.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: sorted array
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
# ----------------------------ALGO---------------------------
2
given the array argument sort the array into ascending order

*/
// function bubbleSort(arr) {
//   return arr.sort((a, b) => a - b)
// }
// without the sort method
// define a varibale swapped and initalise to ''
// iterate over the given array
// if the next elment is lower in the order then the current element 
// swap the elments position
// need to track if a swap has been made so set the swapped variable to true;
// continue doing this swapping until all the elments have been moved and swapped 
// remains empty
function bubbleSort(arr) {
  let swapped;
  while (true) {
    swapped = '';
    for (let i = 0; i < arr.length; i ++) {
      let current = arr[i];
      let next = arr[i + 1];
      if (next  < current) {
        arr[i] = next;
        arr[i+1] = current;
        swapped = true;
      }
    }
    if (swapped === '') return arr;
  }
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]