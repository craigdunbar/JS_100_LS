/*
# -----------------------INSTRUCTIONS------------------------

Write program that prints the longest sentence in a string
based on the number of words. 
Sentence may end with periods, exclamation points of question
marks.
Log the longest sentence and its word coun to the console.
# --------------------------PROBLEM--------------------------

# Input: multiple sentence string
# Output: seingle sentence and word count
# ---------------------------RULES---------------------------
# Explicit: Sentence may end in . ! or ?
            Treat any sequence of charcters that are not spaces
            or sentence ending characters as a word.

# Implicit: always more than one sentence seperated by different
sentencing ending characters.

# --------------------------EXAMPLES-------------------------
longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.
# ----------------------------ALGO---------------------------
# I think the best way to handle the sentence ending characters
is to make all ! and ? a perios and split the sentence that way.

*/
// **** My solution returns the correct sentences and word counts
// but the punctuation is lost ***

function longestSentence(string) {
  let str = string;
  str = str.replace(/[^-,'a-zA-Z ]/g, '.');

  let arr = str.split('.');

  arr.sort((a, b) => {
    let lengthA = a.split(' ').length;
    let lengthB = b.split(' ').length;;
   return lengthB - lengthA;
  });

  console.log(`The longest sentence has ${arr[0].split(' ').length} words`);
  console.log('');
}
// LS Solution: Review regex book?
// function longestSentence(text) {
//   let sentences = text.match(/\w.*?[.!?]/g);

//   let longest = sentences.reduce(
//     function(longest, sentence) {
//       let length = sentence.split(/\s/).length;
//       if (length > longest.length) {
//         return { text: sentence, length: length };
//       } else {
//         return longest;
//       }
//     },
//     { text: "", length: 0 }
//   );

//   console.log(longest.text + "\n");
//   console.log("The longest sentence has " + longest.length + " words.\n");
// }

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.
