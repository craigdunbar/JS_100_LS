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
# 
define and empty string
iterate over the given string
if current char is A change to T and add to new string
if T change to A
if C change to G
and if G change to C
*/
// function DNAStrand(str) {
//   let newStr = ''
//   for (char of str) {
//     if (char === 'A') {
//       newStr = newStr + 'T';
//     } else if (char === 'T') {
//       newStr = newStr + 'A';
//     } else if (char === 'C') {
//       newStr = newStr + 'G';
//     } else if (char === 'G') {
//       newStr = newStr + 'C';
//     }
//   }
//   return newStr;
// }
// rewrite with case statement
function DNAStrand(str) {
  let newStr = ''
  for (char of str) {
    switch(char) {
    case 'A': newStr += 'T';
      break;
    case 'T': newStr += 'A';
      break;
    case 'C': newStr += 'G';
      break;
    case 'G': newStr += 'C';
      break;
    }
  }
  return newStr;
}

console.log(DNAStrand("AAAA")) //,"TTTT","String AAAA is")
console.log(DNAStrand("ATTGC")) //,"TAACG","String ATTGC is")
console.log(DNAStrand("GTAT")) //,"CATA","String GTAT is") 