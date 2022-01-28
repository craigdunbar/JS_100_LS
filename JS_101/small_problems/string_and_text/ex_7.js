/*
# -----------------------INSTRUCTIONS------------------------

# Staggered Caps 2
Modify the previous example so it ignores non-alphabetic
characters for determining the capitaliztion. The
non-alphabetic characters should still be included in the
returned string

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit: ignore the non-alphabetic characters in the
index counts

# Implicit: 

# --------------------------EXAMPLES-------------------------
"I Love Launch School!" === "I lOvE lAuNcH sChOoL!"
"ALL CAPS" === "AlL cApS"
"ignore 77 the 444 numbers" === "IgNoRe 77 ThE 444 nUmBeRs"
# ----------------------------ALGO---------------------------
# same function as before except add a conditional that
if the character is non-alphabetic the index is reduced
by one
*/
function staggeredCase(string) {
  let count = 1
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  return string
    .split('')
    .map((char) => {
      if (!letters.includes(char.toLowerCase())) {
        return char;
      } else {
        count += 1
      return count % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }
  })
    .join('');
};

// Further exploration need to do

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS")
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");