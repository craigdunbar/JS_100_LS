/* Get the middle character
Write a function that takes a non-empty string arg and returns
the middle character(s). If the string length is odd it's one character, 
if even it's two characters.
get the length of the string
divide it by two 
return the string at this index
*/
function centerOf(str) {
  let midChar = (str.length / 2);
  midChar = (Math.floor(midChar));
  
  if(str.length % 2 === 1){
    let char = str[midChar];
  return (char);
} else {
  let char = str[midChar - 1] + str[midChar];
  return (char);
}
}

console.log(centerOf('I Love JavaScript') ===  "a");
console.log(centerOf('Launch School') ===  " ");
console.log(centerOf('Launch') ===    "un");
console.log(centerOf('Launchschool') ===      "hs");
console.log(centerOf('x') ===  "x");