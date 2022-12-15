/*
# -----------------------INSTRUCTIONS------------------------
Video 1
You have to create  a function that takes a positive integer
and returns the next bigger number formed by the same digits


# --------------------------PROBLEM--------------------------

# Input: integer
# Output: next biggest integer
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------a
12 ==> 21
513 ==> 531
2017 ==> 2071
if no bigger number can be composed return -1
9 ==> -1
111 ==> -1
531 ==> -1
# ----------------------------ALGO---------------------------
to find the next hightest number containing the same digits
add one to the original number and check if the digits are the same as the original
eg 513=>514 no the same continues until 531 => same
to check the digits convert the original to a string and split it into an array
convert the new number to an array and iterate over the array
check if each number is included in the original array
return the number if all digits are included else continue adding one to the original 

*/
function nextBiggest(num) {
  // let counter = 0;
  let nextNum = 0;
  let numArr = num.toString().split('').sort()
  for (let i = 1; i < num; i++) {
    nextNum = num + i;
    let nextNumArr = nextNum.toString().split('').sort()
    let counter = 0
    for (let j = 0; j < nextNumArr.length; j++) {
      if (numArr[j] === nextNumArr[j]) {
        counter += 1;
      }
    }
    if (counter === numArr.length) {
      return nextNum;
    } 
  }
  return -1;
}
console.log(nextBiggest(12))
console.log(nextBiggest(513))
console.log(nextBiggest(2017))
console.log(nextBiggest(9))
console.log(nextBiggest(111))
console.log(nextBiggest(531))
