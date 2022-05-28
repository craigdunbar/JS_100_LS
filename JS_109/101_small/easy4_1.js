/*
# -----------------------INSTRUCTIONS------------------------

# How Old is Teddy?

Build a program that randomly generates Teddy's age, 
and logs it to the console. Have the age be a random number 
between 20 and 120 (inclusive).

# --------------------------PROBLEM--------------------------

# Input: 
# Output: number
# ---------------------------RULES---------------------------
# Explicit: random number must be between 20 and 120

# Implicit: 

# --------------------------EXAMPLES-------------------------
Teddy is 69 years old!
# ----------------------------ALGO---------------------------
# generate a random number between 20 and 120 using Math.random() method
Use string literals to generate the desired sentence
*/
// let age = Math.round(Math.random() * (120 - 20) + 20);
// console.log(`Teddy is ${age} years old!`);

// does Math.floor() give the same result?
// THe difference between round() and floor() is that floor always rounds down,
// whereas round() returns the nearest whole number.
// let age = Math.floor(Math.random() * (120 - 20) + 20);
// console.log(`Teddy is ${age} years old!`);

// Also, how can we make the function more robust? 
// What if the user inadvertently gave the inputs in reverse order 
// (i.e., the value passed to min was greater than max)?

// let age = Math.round(Math.random() * (20 - 120) + 20);
// if (age < 0) {
//   console.log("Error: Age cannot be less than zero")
// }
// console.log(`Teddy is ${age} years old!`);
// if the max and min are swapped then you can get a negative number for the age.
// to correct for this we can use a while loop

let age = Math.floor(Math.random() * (20 - 120) + 20);
while (age < 20) {
  age = Math.floor(Math.random() * (120 - 20) + 20);
}
console.log(`Teddy is ${age} years old!`);