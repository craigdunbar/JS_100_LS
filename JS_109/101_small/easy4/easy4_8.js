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
# Explicit: words spererated by spaces, words containing any characters
            empty string should return empty object

# Implicit: 

# --------------------------EXAMPLES-------------------------
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
# ----------------------------ALGO---------------------------
# initalise a function with a single parameter that takes a string argument
initalise an empty object
convert the string into an array of words
iterate over the array and count the letters in each word
add the number of letters to the object as a key.
if another word has the same number of letters increase the value by one
return the object 
*/
function wordSizes(str) {
  let sizesObj = {};
  let arr = str.split(' ');
  arr.forEach(word => {
    let count = word.length;
    if (count === 0) {
      sizesObj;
      } else if (!sizesObj[count]) {
      sizesObj[count] = 1
      } else {
      sizesObj[count] = sizesObj[count] + 1;
    }
  });
  return sizesObj;
}
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}