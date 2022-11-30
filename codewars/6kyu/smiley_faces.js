/*
# -----------------------INSTRUCTIONS------------------------
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 
In case of an empty array return 0. 
You will not be tested with invalid input (input will always be an array). 
Order of the face (eyes, nose, mouth) elements will always be the same.

# Implicit: 

# --------------------------EXAMPLES-------------------------
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

# ----------------------------ALGO---------------------------
# valid face must have eyes : ; 
maybe a nose - ~
a valid mouth ) D
so 6 possible needed element : ; - ~ ) D

define a counter at 0
given the array argument iterate over the array 
for each element spplit into an array of chars
iterate over the chars
if first char is a valid eye and second char is valid nose or mouth 
- valid nose must be followed by valid mouth
counter ++
*/
function countSmileys(arr) {
  let counter = 0;
  let eyes = ':;';
  let nose = '-~';
  let mouth = ')D';

  arr.forEach( str => {
    if (str.length === 2) {
      if (eyes.includes(`${str[0]}`) && mouth.includes(`${str[1]}`)) {
        // console.log('true')
        counter ++;
      }
    } else if (str.length === 3) {
      if (eyes.includes(`${str[0]}`) && nose.includes(`${str[1]}`) && mouth.includes(`${str[2]}`)) {
        counter ++;
      }
    }
  });
  return counter;
}
console.log(countSmileys([]                             )) //, 0);
console.log(countSmileys([':D',':~)',';~D',':)']        )) //, 4);
console.log(countSmileys([':)',':(',':D',':O',':;']     )) //, 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) //, 1);