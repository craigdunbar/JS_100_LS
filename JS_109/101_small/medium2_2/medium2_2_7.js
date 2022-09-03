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
# given the argument begin iterating over the array
if the value of the second element is less than the first then swap the positions
if the third element is less than the second then swap them and so on until the end of the array
then we need to pass through the array again to check the order
repeating the process above to move the smaller values closer to the start of the array
this must be repeated until no more value are moved
we have to keep track of values being moved in order to know when to stop the iteration
we can do this by toggling a variable if and values are moved or leaving it a preset value 
if none are moved.

*/