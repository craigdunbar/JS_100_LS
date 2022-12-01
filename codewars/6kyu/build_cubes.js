/*
# -----------------------INSTRUCTIONS------------------------

Your task is to construct a building which will be a pile of n cubes. 
The cube at the bottom will have a volume of n3 n^3 n3, the cube above 
will have volume of (n−1)3 (n-1)^3 (n−1)3 and so on until the top which 
will have a volume of 13 1^3 13.

You are given the total volume m of the building. 
Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) 
will be an integer m and you have to return the integer n such 
as n3+(n−1)3+...+13=m 
n^3 + (n-1)^3 + ... + 1^3 = m 
n3+(n−1)3+...+13=m 
if such a n exists or -1 if there is no such n.

# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
findNb(1071225) --> 45

findNb(91716553919377) --> -1

# ----------------------------ALGO---------------------------
# initalise a loop starting from 1 and ending at int
on each iteration cube the current number and add it to a total
if total === int
return  current number
*/
function findNb(num) {
  let sum = 0;
  for (let count = 1; count < num; count ++) {
    sum += count ** 3
    if (sum === num) {
      return count
    } else if (sum > num) {
      return -1;
    }
  }
}
console.log(findNb(4183059834009))//, 2022)
console.log(findNb(24723578342962))//, -1)
console.log(findNb(135440716410000))//, 4824)
console.log(findNb(40539911473216))//, 3568)