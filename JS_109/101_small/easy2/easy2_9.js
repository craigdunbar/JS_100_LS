/*
# -----------------------INSTRUCTIONS------------------------

# Convert a String to a Number
Write a function that takes a string of digits and returns 
the appropraite number as an integer.
# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: Cann't use Sting() or Number() methods

# Implicit: 

# --------------------------EXAMPLES-------------------------
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
# ----------------------------ALGO---------------------------
# can't use bulit in functions so will have to use an object 
where the keys are the string representation of the numbers 
adn the values are the integers.
*/
const obj = {0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6,
            7: 7, 8:8, 9: 9}
function stringToInteger(str) {
  let arr = str.split('');
  let intArr = [];
  for (let count = 0; count < arr.length; count++) {
    let currentNum = arr[count];
    let integer = obj[currentNum];

    intArr.push(integer) 
  }
  let num = 0
  intArr.forEach(el => (num = (10 * num) + el));
  return num
}
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
