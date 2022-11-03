const { keyIn } = require("readline-sync")

/*
# -----------------------INSTRUCTIONS------------------------

Create a function that takes a string as an argument and return 
an object with letters of the string and their occurrence as properties:

# --------------------------PROBLEM--------------------------

# Input: string
# Output: object
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------

countOccurencies('abbab'); => {a:2, b: 3}

# ----------------------------ALGO---------------------------
# 
define and empty object
split the sting into an array
iterate over the array and create an new obj key if one doesn't 
exist or add one to the value if one exists
*/
function countOccurencies(str) {
  let obj = {}
  str.split('').forEach(el => {
    Object.keys(obj).includes(el) ? obj[el] ++ : obj[el] = 1;
    // obj[el] ++ || (obj[el] = 1) // more concise
  })
  return (obj)
}
// console.log(countOccurencies('abbab'))

// Further exploration:
// Create a function that takes the object that your function returned 
// as an argument and returns a string with all the letters that 
// appear in the object, in alphabetical order appearing as 
// many times as the value states. Order doesn't matter. 

// For example: 
// {a:1, k:3, g:2} => 'aggkkk'

// algo: define and empty string 
// create an array of obj key, values
// iterate over the array and add the key value times to the str
// sort the string into alphabetical order


function strFromObj(obj) {
  let str = ''
  Object.entries(obj).forEach(arr => {
    str += arr[0].repeat(arr[1]);
  })
  console.log(str.split('').sort().join(''));
}

console.log(strFromObj(countOccurencies('abbab')))
console.log(strFromObj(countOccurencies('akgkkg')))
