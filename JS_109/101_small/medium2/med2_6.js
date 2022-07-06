/*
# -----------------------INSTRUCTIONS------------------------
Sum Square - Square Sum

Write a function that computes the difference between the square of the sum
of the first count positive integers and the sum of the squares of the 
first count positive integers.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: integer representing difference in the two calculated values
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
# ----------------------------ALGO---------------------------
# calculate sum of count integers and then square it
- initiate a loop from 1 to count and sum the numbers
- then square the result

calculate the sum of all the intgers in count squared
- initalise a loop from 1 to count
- square each number and then sum the squares

subtract the second cal from the first to get the diffence
*/
function sumSquareDifference(num) {
    return  sumSquared(num) -squareSum(num);
}
function sumSquared(num) {
    let sum = 0;
    for (let count = 1; count <= num; count ++) {
        sum += count
    }
    return sum ** 2
}

function squareSum(num) {
    let total = 0;
    for (let counter = 1; counter <= num; counter++) {
        total += counter ** 2
    }
    return total;
}
console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150