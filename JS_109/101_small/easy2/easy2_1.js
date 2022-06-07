/*
# -----------------------INSTRUCTIONS------------------------

Welcome stranger 

Write a function that takes an array and an object argument.
Array will contain two or more elements, object will contain 
teo keys 'title' and 'occupation' and the appropriate values.
the function should return a greeting that uses the person's 
full name and metions the title.  
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
# define a funciton with two parameters, call arr and obj
using string interpolation and element access make the greeting
*/
function greetings(arr, obj) {
  let name = ''
  for (let count = 0; count < arr.length; count++) {
    if (count < arr.length - 1) {
    name += (arr[count] + ' ');
    } else {
      name += arr[count];
    }
  }
  // or you could use array.join() Dummy!
  let greeting = `Hello ${name}! Nice to have a ${obj.title} ${obj.occupation} around.`
  return greeting;
}
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.