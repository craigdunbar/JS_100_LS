/*
# -----------------------INSTRUCTIONS------------------------

Letter Counter (Part 2)
Modify the wordSizes function from the previous exercise to 
exclude non-letters when determining word size. 
For instance, the word size of "it's" is 3, not 4.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------


# ----------------------------ALGO---------------------------
# same as last exercise but need to replace non-alpha characters
with '' in each word iteration
*/
function wordSizes(str) {
  let obj = {}
  let wordsArr = str.split(' ');
  if (str.length === 0) {
    return '';
  }

  wordsArr.forEach(word => {
    word = word.replace(/[^a-z]/gi, '')
    let length = String(word.length)
    if (!Object.keys(obj).includes(length)) {
      obj[length] = 1;
    } else obj[length] += 1;
  })
  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));