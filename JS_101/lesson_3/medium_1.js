/*
Question 1
Write a program that outputs "The Flintstones Rock!"
10 times, with the line indented 1 space to the right of
the line above it

let str = "The Flintstones Rock!"
for (let count = 1; count < 10; count ++) {
  console.log(str.padStart(str.length + count));
}
LS solution
for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}

Question 2
Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";
Return a new string that swaps the case of all the letters

let munstersDescription = "The Munsters are creepy and spooky.";
let charArr = munstersDescription.split('');
let switchedArr = []
switchedArr = charArr.map(char => {
  if(char === char.toLowerCase()) {
    return char.toUpperCase();
  } else {
     return char.toLowerCase();
  }
});
console.log(switchedArr.join(''));

Question 3

*/
let munstersDescription = "The Munsters are creepy and spooky.";
let charArr = munstersDescription.split('');
let switchedArr = []
switchedArr = charArr.map(char => {
  if(char === char.toLowerCase()) {
    return char.toUpperCase();
  } else {
     return char.toLowerCase();
  }
});
console.log(switchedArr.join(''));