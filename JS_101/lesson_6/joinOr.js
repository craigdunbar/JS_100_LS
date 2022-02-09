/*
# -----------------------INSTRUCTIONS------------------------

# joinOr
Write a function that can join an array with either the standard
, delimiter or with a different delimiter or with a given word
seperating the last element.

# --------------------------PROBLEM--------------------------

# Input: array, optional delimiter and optional string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: last element will be seperated by the string if given.
            elements will be delimited by either , or option delimiter
            if array is empty return empty string
            if array contains one element then no delimination required.
            if array conatins more than one element must spereate with 'or' 
            or the given string

# Implicit: 

# --------------------------EXAMPLES-------------------------
joinOr([1, 2, 3]);               // => "1, 2, or 3"
joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
joinOr([]);                      // => ""
joinOr([5]);                     // => "5"
joinOr([1, 2]);                  // => "1 or 2"
# ----------------------------ALGO---------------------------
# 
initalize  a function that has 3 arguments
    - an array, a delimiter character and a string
setup a conditional to check how many argumwnts have been given to the fucntion
if there is more than two elements in the array and
    if there is only one argument 
        - returned string will be delimited by a ',' and 
        last element preceeded by 'or'
    if there are two arguments 
        - returned string will be delimited by the given character
        and the final element preceeded by 'or'
    if there are three arguments
        - returned string will be delimited by the given character
        and the final element will be preceeded by the given 'string'
if there are 2 elements in the array
    - the last element will be preceeded by 'or'
if there is one element in the array
    - the value of the element will be returned as a string
if the array is empty
    - an empty string will be returned
*/
// function joinOr(array, delimiter, string) {

//  if (joinOr.arguments.length === 3) {
//         console.log(`${array.slice(0, array.length -1).join(`${delimiter}`)} ${string} ${array[array.length - 1]}`);
//     } else if (joinOr.arguments.length === 2) {
//         console.log(`${array.slice(0, array.length -1).join(`${delimiter}`)} or ${array[array.length - 1]}`);
//     } else if (joinOr.arguments.length === 1 && array.length > 2) {
//     console.log(`${array.slice(0, array.length -1).join(', ')} or ${array[array.length - 1]}`);
//     } else if (joinOr.arguments.length === 1 && array.length === 2) {
//     console.log(`${array.slice(0, array.length -1).join(', ')} or ${array[array.length - 1]}`);
//     } else if (joinOr.arguments.length === 1 && array.length === 1) {
//     console.log(`${array[0]}`)
//     } else if (joinOr.arguments.length === 1 && array.length === 0){
//     console.log("");
//     }
// }
// refactoring
// in order to avoid having to count the number of arguments
// we can assign default paramaters to the function
// this eliminates alot of the above code.
function joinOr(array, delimiter = ', ', string = 'or') {

    if (array.length > 2) {
      return `${array.slice(0, array.length -1).join(`${delimiter}`)} ${string} ${array[array.length - 1]}`;
    } else if (array.length === 2) {
      return array.join(` ${string} `);
    } else if (array.length === 1) {
      return `${array[0]}`;
    } else if (array.length === 0){
      return "";
    }
}

// also using a case statement can clean it up further.

// function joinOr(arr, delimiter = ', ', word = 'or'){
//   switch (arr.length) {
//     case 0:
//       return '';
//     case 1:
//       return `${arr[0]}`;
//     case 2:
//       return arr.join(` ${word} `);
//     default:
//       return arr.slice(0, arr.length - 1).join(delimiter) +
//               `${delimiter}${word} ${arr[arr.length - 1]}`;
//   }
// }

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"