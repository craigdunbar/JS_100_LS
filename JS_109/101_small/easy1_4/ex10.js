/*
# -----------------------INSTRUCTIONS------------------------
Multiples of 3 and 5

Write a function that computes the sum of all numbers between
1 and the number passed in, that are multiples of 3 and 5.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer thats the result of the sum
# ---------------------------RULES---------------------------
# Explicit: integer is greater than 1
            sum from 1 to given integer inclusive

# Implicit: 

# --------------------------EXAMPLES-------------------------
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
# ----------------------------ALGO---------------------------
# given the integer argument use spread operator to generate and array
of undefineds
map this array and convert the elements to the result of index + 1
then use reduce on the array to get the result
*/
function multisum(num) {
  let arr = [...Array(num)]
  .map((el, idx) => el = idx + 1)
  .filter(num => num % 3 === 0 || num % 5 === 0);

  return result = arr.reduce((acc, value) => acc + value, 0)
}
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168