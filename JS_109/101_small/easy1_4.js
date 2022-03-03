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
# import readline-sync using require
use prompt method to get input from the user
ask user for the length of the room and then the width
calculate the area in sq m as l * w
calculate the area in sq ft as (l*w)*10.7639

*/
readline = require('readline-sync');
console.log("What is the length of the room?");
let length = readline.prompt();
length = Number(length);

console.log("What is the width of the room?");
let width = readline.prompt();
width = Number(width);

let area = (length * width).toFixed(2);
let areaFeet = (area * 10.7639).toFixed(2)

while (true) {
  console.log("Are these mesasurments meters or feet");
  let units = readline.prompt();
  if (units.toLowerCase() === 'meters') {
    console.log(`The area of the room is ${area} sq meters (${areaFeet} sq ft)`);
    break;
  } else if (units.toLowerCase() === 'feet') {
      console.log(`The area of the room is ${areaFeet} sq feet (${area} sq meters)`);
      break;
  } else {
      console.log("That's not a valid input");
  }
}