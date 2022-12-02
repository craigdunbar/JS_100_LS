/*
# -----------------------INSTRUCTIONS------------------------
Letter Counter (Part 1)
Write a function that takes a string consisting of zero or more 
space separated words and returns an object that shows the number 
of words of different sizes.

Words consist of any sequence of non-space characters.

# --------------------------PROBLEM--------------------------

input : string

output : obj
# ---------------------------RULES---------------------------
Explicit: Words consist of any sequence of non-space characters.

# Implicit: empty string return nothing?
# --------------------------EXAMPLES-------------------------
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');  

# ----------------------------ALGO---------------------------
# 
create an empty object
split the string into an array of words
iterate over the array and count the length of each word
add the length to the obj as a key if it doesnt exist 
if its already there add one to the value
return the obj
*/
// function wordSizes(str) {
//   let obj = {}
//   let wordsArr = str.split(' ');
//   if (str.length === 0) {
//     return '';
//   }

//   wordsArr.forEach(word => {
//     let length = String(word.length)
//     if (!Object.keys(obj).includes(length)) {
//       obj[length] = 1;
//     } else obj[length] += 1;
//   })
//   return obj;
// }

// using ternary 
function wordSizes(str) {
  
  if (str.length === 0) {
        return '';
      }

  let seenObj = {};
  let arr = str.split(' ');
  arr.forEach(word => seenObj[word.length]++ || (seenObj[word.length] = 1));
  return seenObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));  