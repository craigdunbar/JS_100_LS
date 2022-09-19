/*
# -----------------------INSTRUCTIONS------------------------
Letter Counter (Part 1)
Write a function that takes a string consisting of zero or more 
space separated words and returns an object that shows the number 
of words of different sizes.

Words consist of any sequence of non-space characters.

# --------------------------PROBLEM--------------------------

# Input: str
# Output: object
# ---------------------------RULES---------------------------
# Explicit: Words consist of any sequence of non-space characters.

# Implicit: empty string return nothing?

# --------------------------EXAMPLES-------------------------
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');  
# ----------------------------ALGO---------------------------
# initalise an empty object
split the string into an array of words
iterate over the array
count the size of each word 
check the object keys for a string matching the length of the current word
if no match create the object key
if there's a match add one to the value
continue to the end of the array
return the object
*/
function wordSizes(str) {
  if (str.length === 0) {
    return '';
  }
  let numObj = {};
  let arr = str.split(' ');
  arr.forEach(el => {
    if (!Object.keys(numObj).includes(String(el.length))) {
      numObj[el.length] = 1;
    } else {
      numObj[String(el.length)] += 1
    }
  });
  return numObj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));  