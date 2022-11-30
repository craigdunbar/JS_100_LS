/*
# -----------------------INSTRUCTIONS------------------------
Build a pyramid-shaped tower, as an array/list of strings, 
given a positive integer number of floors. 
A tower block is represented with "*" character.

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: array
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]


# ----------------------------ALGO---------------------------
# the integer argument gives the number of progressions through odd numbers
ie 3 means a pyrmaid of 1, 3, 5
5 means a pyramid of 1, 3, 5, 7, 9
so to get the longest row double the integer and subtract one
3 * 2 = 6 - 1 = 5
fist row is 2 spaces and one star and 2 spaces
second row is 1 space three stars 1 space
initalise a loop from 1 to int, in odd increments
number of stars = current num 
number of spaces = longest - current num / 2
*/
function towerBuilder(int) {
  let longest = (int * 2) - 1;
  let arr = [];
  let stars = '*';
  let spaces = ' ';

  for (let count = 1; count <= longest; count += 2) {
    let numSpaces = (longest - count)/ 2

    arr.push(`${spaces.repeat(numSpaces)}${stars.repeat(count)}${spaces.repeat(numSpaces)}`)
  }
  return arr;
}

console.log(towerBuilder(1)) //, ["*"]);
console.log(towerBuilder(2)) //, [" * ","***"]);
console.log(towerBuilder(3)) //, ["  *  "," *** ","*****"]