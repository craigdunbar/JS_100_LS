/*
# -----------------------INSTRUCTIONS------------------------

Create a function that takes a string as an argument and returns 
an object containing strings segregated as follows: numbers, 
upper case letters, lower case letters, other symbols
# --------------------------PROBLEM--------------------------
# Input:string
# Output: object

# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

BEYOND?

# --------------------------EXAMPLES-------------------------
segregate('aad559 $%,'); //{lettersUpper: '', lettersLower: 'aad', numbers: '559', other characters: '$%,' }
segregate('11AB'); //{lettersUpper: 'AB', lettersLower: '', numbers: '', other characters: '' }

# -----------------ALGO and Data Structure ------------------
create an object with keys upper, lower, numbers, other
iterate over the string 
use if statements to determine the type of character
add the character to the relevant key
ie if (char.toLowerCase() === char) add the char to the lower key values as a string
}

*/
function segregate(str) {
  let obj = {upper: '', lower: '', numbers: '', other: ''}
  obj.lower = str.replace(/[^a-z]/g, '');
  obj.upper = str.replace(/[^A-Z]/g, '');
  obj.numbers = str.replace(/[^0-9]/g, '');
  obj.other = str.replace(/[a-z0-9]/gi, '');
  return obj;
}
console.log(segregate('aad559 $%,')); //{lettersUpper: '', lettersLower: 'aad', numbers: '559', other characters: '$%,' }
console.log(segregate('11AB')); //{lettersUpper: 'AB', lettersLower: '', numbers: '', other characters: '' }