/*
# -----------------------INSTRUCTIONS------------------------

Given a number n, return the number of positive odd numbers below n, EASY!
Examples (Input -> Output)

# --------------------------PROBLEM--------------------------

# Input: integer
# Output: number of odd integers less than n
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

Expect large Inputs!
# ----------------------------ALGO---------------------------
# create an array of odd numbers between 1 and the given integer
return the length of this array
*/
// function oddCount(num) {
//   let arr = [...Array(num)].map((el, idx) => el = idx);
//   let oddArr = [];
//   arr.forEach(el => {
//     if (el % 2 === 1) {
//       oddArr = oddArr.concat(el)
//     }
//   })
//   return oddArr.length;
// }

function oddCount(num) {
  let count = 0;
  for (let idx = 0; idx < num; idx++) {
    if (idx % 2 === 1) {
      count ++
    }
  }
  return count;
}
console.log(oddCount(7));
console.log(oddCount(15));
console.log(oddCount(289337833306152));
