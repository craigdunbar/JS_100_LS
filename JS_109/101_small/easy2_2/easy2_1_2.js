/*
# -----------------------INSTRUCTIONS------------------------

Welcome stranger 

Write a function that takes an array and an object argument.
Array will contain two or more elements, object will contain 
the keys 'title' and 'occupation' and the appropriate values.
the function should return a greeting that uses the person's 
full name and mentions the title.  
# --------------------------PROBLEM--------------------------

# Input: array and object
# Output: string 
# ---------------------------RULES---------------------------
# Explicit: return greeting with full name and title

# Implicit: both array and object are not empty

# --------------------------EXAMPLES-------------------------
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
# ----------------------------ALGO---------------------------
given the array and object arguments use array element reference to create the
full name of the person
use Object.value() to access an array of the values for keys title and occupation
use array element reference to access these elements
use string interpolation to create the output

*/
function greetings(arr, obj) {
  let name = arr.join(' ');
  // let valuesArr = Object.values(obj);
  // let title = valuesArr[0];
  // let occupation = valuesArr[1]
  
  // return `Hello ${name}! Nice to have a ${title} ${occupation} around!`
  
// why not use obj.title and obj.occupation??
  return `Hello ${name}! Nice to have a ${obj.title} ${obj.occupation} around!`
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));