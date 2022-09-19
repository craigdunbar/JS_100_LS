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
# Explicit: exclude non-letters from count

# Implicit: 

# --------------------------EXAMPLES-------------------------
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes(''); 
# ----------------------------ALGO---------------------------
# use function from before but replace non-letters with an empty space
*/
function wordSizes(str) {
  if (str.length === 0) {
    return '';
  }
  let numObj = {};
  str = str.replace(/[^a-z s]/gi, '');
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

console.log(wordSizes('Four score and seven.'));           // { "3": 1, "4": 1, "5": 2 }            
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                           // { "2": 1, "3": 1, "5": 1 }   
console.log(wordSizes(''));  