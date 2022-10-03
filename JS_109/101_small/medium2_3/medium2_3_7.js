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
# 
define a variable that will be used to track the changes
iterate over the given array and compare the consecutive elements
if current element is higher than the next element then swap positions
change the variable to show a change was made
continue this iteration until no more elements need to be moved
use a do while loop
*/
function bubbleSort(arr) {
  while (true) {
    let changed = false;
    for (let count = 0; count < arr.length; count ++) {
      let current = arr[count];
      let next = arr[count + 1];
      if (current > next) {
        [arr[count], arr[count + 1]] = [next, current]
        changed  = true;
      }
    }
    if (changed === false) break
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