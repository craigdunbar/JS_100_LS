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
# Output: array sorted in ascending order
# ---------------------------RULES---------------------------
# Explicit: array always ahs at least two elements
Can't use sort method

# Implicit: 

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
# given the array argument
while there are still elements to be changed
iterate over the array
set a variable called swapped to false
starting at the second element compare its value to the first elment
if the first element is a higher value swap the postions in the array
assign the swapped variable to true
continue on through the iteration until the end of the array
repeat this iteration unitl all the values have been swapped
if swapped is false at the end of the iteration then break out of the loop 
return the sorted array
*/
function bubbleSort(arr) {
  let swapped;
  while(true) {
    swapped = false
    for (let count = 1; count < arr.length; count ++) {
      if (arr[count] < arr[count - 1]) {
        [arr[count], arr[count -1]] = [arr[count - 1], arr[count]];
        swapped = true;
      }
    }
    if (swapped === false) break;
  } 
  return arr;
}
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]