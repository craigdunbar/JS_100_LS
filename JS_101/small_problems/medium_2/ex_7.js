/*
# -----------------------INSTRUCTIONS------------------------
Bubble sort

Write a function that takes an array argument ans sorts that
array using the bubble sort algorithm.


# --------------------------PROBLEM--------------------------

# Input:
# Output:
# ---------------------------RULES---------------------------
# Explicit: sort in place

# Implicit:

# --------------------------EXAMPLES-------------------------

# ----------------------------ALGO---------------------------
# The bubble sort algorithm works by making multiple passes
through an array.
On each pass the two values of each pair of consecutive elements
are compared.
If the first value is greater than the second, the two elements
are swapped.
The process is repeated until a complete pass has no swaps

define a function with an array argument
while swaps are still happening:
initalise an iteration to loop through the array
on each iteration compare consecutive elements
if the second element is bigger than the first swap them
and record that a swap happened
if not leave them
continue until there are no more swaps

*/
function bubbleSort(arr) {
  let swaps;

  while (swaps !== 0) {
    swaps = 0;
    for (let count = 0; count < arr.length; count++) {
      if (arr[count] > arr[count + 1]) {
        [arr[count], arr[count + 1]] = [arr[count + 1], arr[count]];
        swaps += 1;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3]));
console.log(bubbleSort([6, 2, 7, 1, 4]));
console.log(bubbleSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
