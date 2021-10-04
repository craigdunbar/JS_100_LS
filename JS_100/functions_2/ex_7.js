// arrow functions

const template = "I VERB NOUN.";

let sentence = (noun, verb) => template
.replace('VERB', verb)
.replace("NOUN", noun);

console.log(sentence('like', 'birds'));