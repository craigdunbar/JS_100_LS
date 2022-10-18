/*
# -----------------------INSTRUCTIONS------------------------
Welcome stranger 

Write a function that takes an array and an object argument.
Array will contain two or more elements, object will contain 
teo keys 'title' and 'occupation' and the appropriate values.
the function should return a greeting that uses the person's 
full name and mentions the title.  

# --------------------------PROBLEM--------------------------

# Input: array and object
# Output: string
# ---------------------------RULES---------------------------
# Explicit: reurn greeting with full name and title

# Implicit: both array and object are not empty

# --------------------------EXAMPLES-------------------------
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
# ----------------------------ALGO---------------------------
# join the array into a string, space delimited
us object property reference to add the values to the string
using sting interpoltion
*/
function greetings(arr, obj) {
  let name = arr.join(' ');
  console.log(`Hello ${name}! Nice to have a ${obj.title} ${obj.occupation} around.`);
}
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.