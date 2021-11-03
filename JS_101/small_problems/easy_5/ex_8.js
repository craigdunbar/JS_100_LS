/*
# -----------------------INSTRUCTIONS------------------------
# List of digits
Given a positive integer argument return a list of the
digits in the number

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: array
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: integer greater than 0

# --------------------------EXAMPLES-------------------------
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
# ----------------------------ALGO---------------------------
# initalise function with integer arg
change integer to string
creat array from string
print array
*/
function digitList(num) {
    let strArr = Array.from(num.toString());
    return strArr.map(el => Number(el));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]