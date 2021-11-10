/*
# -----------------------INSTRUCTIONS------------------------
# 
Reverse it (part 2)
Function takes a string arg and returns a new string with
all the five or more letter words will be reversed.
# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
# ----------------------------ALGO---------------------------
# initalise funciton with string arg
split string into an array of words
initalise an iterator
initalise a conditional
check each word length
if words is 5 or more characters reverse it, otherwise return
the word.
join the array back to a string and return it
*/
// function reverseWords(str) {
//   let wordsArr = str.split(' ');
//   let newArr = [];
  
//   for (let count = 0; count < wordsArr.length; count ++) {
//     let word = wordsArr[count];
//     if (word.length <= 4) {
//       newArr.push(word);
//     } else {
//       newArr.push(word.split('').reverse().join(''));
//     }
//   }
//   return newArr.join(' ');
// }

// refactored with map
// function reverseWords(str) {
//   let wordsArr = str.split(' ');
//   let newArr = wordsArr.map((word) => {
//   if(word.length >=5) {
//     return word.split('').reverse().join('');
//   } else {
//     return word;
//   }
// })
// return newArr.join(' ');
// }

// map and ternary operator
function reverseWords(str) {
  let wordsArr = str.split(' ');
  let newArr = wordsArr.map((word) => word.length >=5 ? word.split('').reverse().join('') : word);
  return newArr.join(' ');
}

console.log(reverseWords('Professional') ===  "lanoisseforP");
console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");
console.log(reverseWords('Launch School') === "hcnuaL loohcS");