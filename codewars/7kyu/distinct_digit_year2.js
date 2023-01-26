/*
# -----------------------INSTRUCTIONS------------------------
Distinct digit years
The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, find the 
minimum year number which is strictly larger than the given one and has only distinct digits.
# --------------------------PROBLEM--------------------------

# Input: integer
# Output: next biggest integer with distinct digits
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
1987 => 2013
2013 => 2014
# ----------------------------ALGO---------------------------
add one to the year and chaeck to see if there are duplicate numbers
chamge the number to a string
split the number into an array of digits
use SET to remove the duplicates 
if the SET aray and the original are the same 
return the array joined bakcin to a number
if not continue adding one
*/
function digitYear(num) {
  for (let i = 1; i < 3000; i ++) {
    let nextYear = num + i
    let arr = nextYear.toString().split('')
    let unique = [...new Set(arr)];
    if (unique.length === arr.length) {
      return nextYear;
    }
  }
}
console.log(digitYear(1987));
console.log(digitYear(2013));
