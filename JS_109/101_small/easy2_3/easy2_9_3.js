/*
# -----------------------INSTRUCTIONS------------------------
# Convert a String to a Number
Write a function that takes a string of digits and returns 
the appropraite number as an integer. 
Without JS conversion methods

# --------------------------PROBLEM--------------------------

# Input: string
# Output: number
# ---------------------------RULES---------------------------
# Explicit: Cann't use Sting() or Number() methods

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
# ----------------------------ALGO---------------------------
# define an object of key that are string numbers from 0 to 9, with values the same but actual numbers
define a variable called num and assign it a value of 0;
initalize a loop and iterate over the given str
to build the integer of the string
multiply the num value by 10 and add the number equivalent of the string value from the obj
continuw to the end of the string
return the new number

*/
function stringToInteger(str) {
  let numObj = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
                '8': 8, '9': 9}
  let num = 0;
  for (char of str) {
    num = (num * 10) + numObj[char]
  }
  return num;
}
console.log(stringToInteger("4321")) // === 4321); // logs true
console.log(stringToInteger("570")) // === 570); // logs true