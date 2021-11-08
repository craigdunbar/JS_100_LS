/*
# -----------------------INSTRUCTIONS------------------------
# Name swapping 
Write a function that takes a string arg of first name and 
last name, ans returns a new stirng with the names swapped
and seperated by a comma

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: always two names

# Implicit: 

# --------------------------EXAMPLES-------------------------
swapName('Joe Roberts');    // "Roberts, Joe"
# ----------------------------ALGO---------------------------
# initalise function with str arg
split str into array
create a new array
push the str array elements to the new array in  the reverse order
join the new array with a comma seperator
*/
// function swapName(name) {
//   let newArr = [];
//   let nameArr = name.split(' ');
//   newArr.push(nameArr[1], nameArr[0]);
//   return (newArr.join(', '));
// }
// refactored
// function swapName(name) {
//   return name.split(' ').reverse(). join(', ');
// }
// further exploration
// function swapName(name) {
//   let newArr = []
//   if(name.split(' ').length === 2){
//   return name.split(' ').reverse(). join(', ');
// } else {
//   arr = name.split(' ')
//   newArr[0] = (arr[arr.length -1]);
//   newArr[1] = arr.slice(arr[0], arr.length - 1).join().replace(/,/g, ' ');
// }
// return(newArr.flat().join(', '));
// }

// further exploration refoctoed
function swapName(name) {
  let arr = name.split(' ');
  return `${arr.pop()}, ${arr.join(' ')}`;
}

console.log(swapName('Joe Roberts') === "Roberts, Joe");
console.log(swapName('Karl Oskar Henriksson Ragvals') === "Ragvals, Karl Oskar Henriksson");
