/*
# -----------------------INSTRUCTIONS------------------------

Bubble Sort

Write a function that takes an array as an argument and sorts that array using 
the bubble sort algorithm described above. 
The sorting should be done "in-place" — that is, the function should 
mutate the array. 
You may assume that the array contains at least two elements.
# --------------------------PROBLEM--------------------------

# Input: array
# Output: array sorted into ascending order
# ---------------------------RULES---------------------------
# Explicit: array always has two elements

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
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
# initalise a loop that iterates over the given array
starting with the element at index 1
on each iteration comapre the current element with the last element 
if the currnet element is higher in ascending order than the previous one then leave them
but if the current element is lower than the previous one swap them. 
countinue this iteration while there are still moves being made
track the swaps with a variable that shows true when a swap is done,
false when all the swaps are completed
*/
function bubbleSort(arr) {
    return arr.sort((a, b) => a - b);
}

function bubbleSort(arr) {
  while (true) {
    let swapped = false;
    for (let count = 1; count < arr.length; count++) {
      if (arr[count] < arr[count - 1]) {
        [arr[count], arr[count - 1]] = [arr[count - 1], arr[count]]
         swapped = true;
      } else {
        continue;
      }
    }
    if (swapped === false) break; 
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