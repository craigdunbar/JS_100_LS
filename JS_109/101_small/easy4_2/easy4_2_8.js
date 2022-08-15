/*
# -----------------------INSTRUCTIONS------------------------
Letter Counter (Part 1)
Write a function that takes a string consisting of zero or more 
space separated words and returns an object that shows the number 
of words of different sizes.

Words consist of any sequence of non-space characters.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: object
# ---------------------------RULES---------------------------
# Explicit: Words consist of any sequence of non-space characters.

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');    
# ----------------------------ALGO---------------------------
# 
define an empty object
given the string argument 
split the string into an array of words delimited by spaces
iterate over the array and get the length of the string
add this length t0 the object as a key if it doesn't exist already
if it does exist then increases the corresponding key's value by 1
return the object once the interation is complete
*/
function wordSizes(str) {
  let wordsObj = {}
  let arr = str.split(' ');
  arr.forEach(el => {
    let length = el.length
    if (!Object.keys(wordsObj).includes(String(length))) { // same as (!wordsObj[length])
      // if (!wordsObj[length]) {
      wordsObj[length] = 1
    } else {
      wordsObj[length] = (wordsObj[length] + 1);
    }
  })
  return wordsObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));   