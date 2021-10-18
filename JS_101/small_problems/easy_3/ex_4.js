/*
# -----------------------INSTRUCTIONS------------------------

# fibonacci numbers by location and length
# --------------------------PROBLEM--------------------------
# write a function that calculates the ans returns the index 
of the Fib number at that has the number of digits specified
by the arguement.

# Input: integer
# Output: intger
# ---------------------------RULES---------------------------
# Explicit: first and second fib numbers are 1
# Implicit: 

# --------------------------EXAMPLES---------------------------------------
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
# ----------------------------ALGO----------------------------------------
# initalise a function with a number arguement
initalise an array with [1, 1] as first two elemnts
add to array by summing the previuos two elements
continue adding elements until the number of digits equals 
the number given

*/
function findFibonacciIndexByLength(num) {
    let array = [1, 1]
    let count = 2
    do {
    array[count] =array[count - 2] + array[count -1];
    count ++
    } while (array[array.length - 1].toString().length < num) 
    return count;
}
// console.log(findFibonacciIndexByLength(2n)); //=== 7n);    // 1 1 2 3 5 8 13
// console.log(findFibonacciIndexByLength(3n)); //=== 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(10n)); // === 45n);
// console.log(findFibonacciIndexByLength(16n)); // === 74n);
console.log(findFibonacciIndexByLength(100n)); // === 476n);
console.log(findFibonacciIndexByLength(1000n)); // === 4782n);
// console.log(findFibonacciIndexByLength(10000n)); // === 47847n);