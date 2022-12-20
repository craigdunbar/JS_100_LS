/*
# -----------------------INSTRUCTIONS------------------------

Sequence Count
Create a function that takes two integers as arguments. 
The first argument is a count, and the second is the starting 
number of a sequence that your function will create. 
The function should return an array containing the same number 
of elements as the count argument. 
The value of each element should be a multiple of the starting number.
# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 
count argument will always be an integer greater than or equal to 0
The starting number can be any integer
If the count is 0, the function should return an empty array.

# Implicit: 

# --------------------------EXAMPLES-------------------------
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
# ----------------------------ALGO---------------------------
first integer is the number of elements in the arrau
the second integer is the starting value, subsequent values as mulitples of this
create an array of the first intgere number of elements
map this array using the current idx + 1 multiplied by the second integer
*/
function sequence(num1, num2) {
  return [...Array(num1)].map((el, idx) => el = num2 * (idx +1))
}
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []