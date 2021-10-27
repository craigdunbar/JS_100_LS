/*
# -----------------------INSTRUCTIONS------------------------
# Running Totals
function takes an array of numbers and returns an array of same 
size but with the elements being running totals of original array
# --------------------------PROBLEM--------------------------

# Input: array
# Output: array
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
# ----------------------------ALGO---------------------------
# initalise function with array arguement
use map to generate a new array
with the elements being running totals 
*/
function runningTotal(array) {
    let sum = 0
    let newArr = array.map(el => {
        return sum += el;
    })
return (newArr);
}
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []console.log()