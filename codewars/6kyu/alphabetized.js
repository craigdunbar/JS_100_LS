/*
# -----------------------INSTRUCTIONS------------------------

# name

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------


# ----------------------------ALGO---------------------------
# 
*/
function alphabetized(s) {
  let onlyLetter = s.split('').filter(char => char.toLowerCase() !== char.toUpperCase()).join('') 
  let arrChar = onlyLetter.split('')
  console.log(arrChar)
   while (true) {
    let swapped = false;
    for (let idx = 1; idx < arrChar.length; idx++) {
      if (arrChar[idx - 1].toLowerCase() <= arrChar[idx].toLowerCase()) continue;
      [arrChar[idx - 1], arrChar[idx]] = [arrChar[idx], arrChar[idx - 1]];
      swapped = true;
    }
    if (!swapped) break;
  }
    console.log(arrChar.join(''))
  }

  console.log(alphabetized('The Holy Bible')) //, 'BbeehHilloTy'))