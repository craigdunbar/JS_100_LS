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
# Output: display the greeting
# ---------------------------RULES---------------------------
# Explicit: return greeting with full name and title

# Implicit: both array and object are not empty

BEYOND?

# --------------------------EXAMPLES-------------------------
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
# ----------------------------ALGO---------------------------
# use string interpolation to display the greeting
use array and object property reference to select the variables
*/
function greetings(arr, obj) {
  let name = arr. join(' ');
  let title = obj.title;
  let occupation  = obj.occupation;
  return `Hello, ${name}! Nice to have a ${title} ${occupation} around.`
}
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.