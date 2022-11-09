/*
# -----------------------INSTRUCTIONS------------------------
a word or name made up of two identical parts, such as so-so, 
tom-tom or Pago Pago.

Create a function that takes a string as an argument and 
returns a boolean value, true if the word is a 
tautonym and false if it's not.

# --------------------------PROBLEM--------------------------
# Input:

# Output:

# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
isTatutonym("Pago Pago"); //true
isTautonym('abcd'); //false

# -----------------ALGO and Data Structure ------------------
split the string into two strings of the same length
compare the strings
return true of they're the same and false if not
*/
function isTautonym(str) {
  str = str.replace(/\s/g, '')
  let mid = str.length / 2
  let str1 = str.slice(0, mid)
  let str2 = str.slice(mid)
  return str1 === str2 ? true : false
}
console.log(isTautonym("Pago Pago")); //true
console.log(isTautonym('abcd')); //false