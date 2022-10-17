/*
# -----------------------INSTRUCTIONS------------------------
How big is the room?

Build a program that asks the user to enter the length and 
width of a room in meters, and logs the area of the room to 
the console in both sq meters and sq ft.

# --------------------------PROBLEM--------------------------

# Input: user input length and width
# Output: area of room in sq meters and sq ft
# ---------------------------RULES---------------------------
# Explicit: don't need to validate the input
            1 sq m === 10.7639 sq ft

# Implicit: 

# --------------------------EXAMPLES-------------------------
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
# ----------------------------ALGO---------------------------
# use readline-sync to get the user input in meters
mutliply length by width to get area 
use conversion factor to get l and w in ft 
multiply again to get area in sq ft
use toFixed to get the correct number of digits after the decimal
*/
let rlSync = require('readline-sync');
let length = rlSync.question('Enter the length of the room in meters: ');
let width = rlSync.question('Enter the width of the room in meters: ');

// let lengthFt = length * 10.7639 
// let widthFt = width * 10.7639 

let areaM = (length * width).toFixed(2)
let areaFt = (areaM * 10.7639).toFixed(2)

console.log(`The area of the room is ${areaM} square meters (${areaFt} square ft)`)