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
Refactor the code below to handle an input of 0 without 
raising an exception:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}
My soln:
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor > 0);
  return factors;
}

LS solution:
function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  } while (divisor !== 0);
  return factors;
}
Question 4
array.push mutates the buffer array, concat does not

Question 5
console.log(0.3 + 0.6); // will log 0.9
console.log(0.3 + 0.6 === 0.9); // will log true

These answers are wrong. Floating point numbers lack 
precision and can yield unexpected results.
the actaul output was:
0.89999999
false

Question 6
I think it will log true.
Wrong it returns false. Use isNaN() to determine if a 
value is NaN.

Question 7
THe code will output 34.
42 is passed into messWithIt as someNumber
it is then incresed by 8
so someNumber = 50
answer still remains 42.
console.log(answer - 8) outputs 34.

Question 8
Yes the original musters object is changed as
Object.values() returns an array but it references
the original object. There is no reassignment.

Question 9

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
outputs "paper" 

because.. working through the rps in parantheses
2 inner parentheses (rock, paper) = paper, (rock, scissors) = rock
inner parenthese (paper, rock) = paper
final parentheses (paper, rock) = paper

Question 10
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
What does the following invocation return?
bar(foo());

foo() returns "yes"
bar('yes') reurns "no"
*/
