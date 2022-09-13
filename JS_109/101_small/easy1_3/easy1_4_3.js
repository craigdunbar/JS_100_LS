/*
# -----------------------INSTRUCTIONS------------------------
How big is the room?

Build a program that asks the user to enter the length and 
width of a room in meters, and logs the area of the room to 
the console in both sq meters and sq ft.

# --------------------------PROBLEM--------------------------

# Input: user inputs dimensions
# Output: area of room in sqm and sq ft
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
# use readline-sync to get input from the user
calculate the area of the room in sq meters
use the m to ft conversion to get the area of the room in sq ft
log the area to the console with the correct number of digits after the decimal point.
*/
const METERSTOFEET= 10.7639
let rlSync = require('readline-sync');
let length = rlSync.question("Enter the length of the room in meters: ");
let width = rlSync.question("Enter the width of the room in meters: ");
let areaMeters = length * width
let areaFeet = areaMeters * METERSTOFEET
console.log(`THe area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square feet)`)