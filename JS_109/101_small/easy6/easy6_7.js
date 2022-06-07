/*
# -----------------------INSTRUCTIONS------------------------
Name Swapping
Write a function that takes a string argument consisting of a 
first name, a space, and a last name, and returns a new string 
consisting of the last name, a comma, a space, and the first name.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
swapName('Joe Roberts');    // "Roberts, Joe"
# ----------------------------ALGO---------------------------
# define a function with a string argument
split the string into an array of words
reverser the words
join with a comma delimeter
*/
// function swapName(str) {
//     return (str.split(' ').reverse().join(', '));
// }
// console.log(swapName('Joe Roberts'));    // "Roberts, Joe")

// Further Exploration
// What if the person has one or more middle names? 
// Refactor the current solution so that it can accommodate this; 
// the middle names should be listed after the first name:

// function swapName(str) {
//     let nameArr = str.split(' ');
//     let middleNames = nameArr.splice(1,2).join(' ');

//     return (nameArr.reverse().join(', ').concat(' ', middleNames));
// }

// easier way using pop()
function swapName(str) {
    let nameArr = str.split(' ');
    return (`${nameArr.pop()}, ${nameArr.join(' ')}`)
}
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"