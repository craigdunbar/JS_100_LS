/*
# -----------------------INSTRUCTIONS------------------------

Create a function that takes a string as an argument and return 
a boolean, true if all characters in the string are the 
same characters and false otherwise.
# --------------------------PROBLEM--------------------------
# Input:string

# Output:boolean

# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
 haveSameChar('aaaaaa') //true
 haveSameChar('cccb9') //false

# -----------------ALGO and Data Structure ------------------
split the string into an array
use filter to return an array of elements that are the same as the first elemtn
if the length of filterd array === arr then all chars are the same
*/
function haveSameChar(str) {
  let arr = str.split('')
  return arr.filter(el => el === arr[0]).length === str.length? true : false
}
 console.log(haveSameChar('aaaaaa')) //true
 console.log(haveSameChar('cccb9')) //false