/*
# -----------------------INSTRUCTIONS------------------------
Letter Counter (Part 2)
Modify the wordSizes function from the previous exercise to 
exclude non-letters when determining word size. 
For instance, the word size of "it's" is 3, not 4.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: object
# ---------------------------RULES---------------------------
# Explicit: remove non letter characters from the word size

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');  
# ----------------------------ALGO---------------------------
# use function from before but remove non letter characters
*/
function wordSizes(str) {
  let wordsObj = {}
  if (str.length === 0) { // guard clause for empty string argument.
    return '';
  } else {
  str = str.replace(/[^a-z s]/gi, '');
  }
  let arr = str.split(' ');
  
  arr.forEach(el => {
    let length = el.length
    if (!Object.keys(wordsObj).includes(String(length))) { // same as (!wordsObj[length])
      wordsObj[length] = 1
    } else {
      wordsObj[length] = (wordsObj[length] + 1);
    }
  })
  return wordsObj;
}
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));  