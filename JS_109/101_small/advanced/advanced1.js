/*
# -----------------------INSTRUCTIONS------------------------
Madlibs Revisited

Build a madlibs program that takes a text "template" as input, plugs 
in a selection of randomized nouns, verbs, adjectives, and adverbs 
into that text, and then returns it. 
You can build your lists of nouns, verbs, adjectives, and adverbs 
directly into your program. 
Your program should read this text and, for each line, place random 
words of the appropriate types into the text and return the result.



# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
function madlibs(template) {
  // ...
}

// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

Note: The quotes in the example strings returned by the madlibs function are only shown for emphasis.
# ----------------------------ALGO---------------------------
# generate 4 arrays each containing only one type of word as shoen above
each array holds four elements that are examples of the type of word
use math.random to generate a random number between 1 and 4
use this number to select an element from the array
do this for all 4 arrays
add the selcted random numbers to the template
*/
function madLibs() {
  let adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
  let nouns = ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
  let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
  let adverbs = ['easily', 'lazily', 'noisily', 'excitedly', 'quietly'];

  // let randomNum = Math.floor(Math.random() * 5);

  let randomAdj = adjectives[randomNum()];
  let randomNoun = nouns[randomNum()];
  let randomVerb = verbs[randomNum()];
  let randomAdv = adverbs[randomNum()];

  console.log(`The ${randomNoun} ${randomVerb} the ${randomNoun}'s ${randomAdj} ${randomAdv}!`);
}
function randomNum() {
  let randomNum = Math.floor(Math.random() * 5);
  return randomNum;
}
madLibs();