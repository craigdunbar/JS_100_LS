/*
# -----------------------INSTRUCTIONS------------------------
Re-order the characters of a string, so that they are concatenated 
into a new string in "case-insensitively-alphabetical-order-of-appearance" 
order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words 
containing the english alphabet letters.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
alphabetized("The Holy Bible") // "BbeehHilloTy"

# ----------------------------ALGO---------------------------
# 
*/
// function alphabetized(s) {
//   let onlyLetter = s.split('').filter(char => char.toLowerCase() !== char.toUpperCase()).join('') 
//   let arrChar = onlyLetter.split('')
//   console.log(arrChar)
//    while (true) {
//     let swapped = false;
//     for (let idx = 1; idx < arrChar.length; idx++) {
//       if (arrChar[idx - 1].toLowerCase() <= arrChar[idx].toLowerCase()) continue;
//       [arrChar[idx - 1], arrChar[idx]] = [arrChar[idx], arrChar[idx - 1]];
//       swapped = true;
//     }
//     if (!swapped) break;
//   }
//     console.log(arrChar.join(''))
//   }


  function alphabetized(str) {
    return str.split('').sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase())).join('')
  }
  
  console.log(alphabetized('The Holy Bible')) //, 'BbeehHilloTy'))