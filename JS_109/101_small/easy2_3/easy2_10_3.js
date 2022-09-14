/*
# -----------------------INSTRUCTIONS------------------------
Convert a string to a Signed Number!

Write a function that takes a string of digits and returns
the appropriate number as an integer. THe string may have
leading + or - sign, the function should return a positive
or negative integer based on this

# --------------------------PROBLEM--------------------------

# Input: string
# Output: positive or negative integer
# ---------------------------RULES---------------------------
# Explicit: return positive or negavtive based on the sign
return positive if no sign given.
cannot use JS conversion methods
can use function from last exercise.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
# ----------------------------ALGO---------------------------
# use last exercise function 
but if string startsWith a '-' return a negative integer
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

function stringToSignedInteger(str) {
  let int =  0;
 if (str.startsWith('-')) { 
   str = str.slice(1);
   int = stringToInteger(str)
   return (int * -1);
  } else if (str.startsWith('+')) {
    str = str.slice(1);
    int = stringToInteger(str)
    return int;
  } else {
     int = stringToInteger(str)
    return (int);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true