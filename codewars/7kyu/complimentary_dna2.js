/*
# -----------------------INSTRUCTIONS------------------------
In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell); 
you need to return the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: never empty string

# Implicit: 

# --------------------------EXAMPLES-------------------------
Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

# ----------------------------ALGO---------------------------
define an empty str
split the string into an array of chars
iterate over the array
if the char is an A convert it to a T and add to the new string
if the char is a C convert to a G and add
if char is a T convert to an A
if char is a G convert to a C
return the new string
*/
function DNAStrand(str) {
  let newStr = '';
  str.split('').forEach(char => {
    if (char === 'A') {
      newStr = newStr.concat('T')
    } else if (char === 'T') {
      newStr = newStr.concat('A')
    } else if (char === 'C') {
      newStr = newStr.concat('G')
    } else if (char === 'G') {
      newStr = newStr.concat('C')
    }
  })
  return newStr;
}
console.log(DNAStrand("ATTGC")) //  --> "TAACG"
console.log(DNAStrand("GTAT")) // --> "CATA")