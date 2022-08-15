/*
# -----------------------INSTRUCTIONS------------------------
How big is the room?

Build a program that asks the user to enter the length and 
width of a room in meters, and logs the area of the room to 
the console in both sq meters and sq ft.

# --------------------------PROBLEM--------------------------

# Input: user inputs integers
# Output: string containing room area is sq m and sq ft
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
ask user for length, width of room
calcaulate the area
use string literal to display the area in the two units
use toFixed(2) to get 2 decimal places
*/
let rlSync = require('readline-sync')
let length = rlSync.question("Enter the length of the room in meters: ")
let width = rlSync.question("Enter the width of the room in meters: ")
let areaM = length * width
let areaFt = areaM * 10.7639
console.log(`The area of the room is ${areaM.toFixed(2)} square meters (${areaFt.toFixed(2)} square feet).`)