/*
# -----------------------INSTRUCTIONS------------------------

Everyone knows passphrases. One can choose passphrases from poems, 
songs, movies names and so on but frequently they can be guessed 
due to common cultural references. 
You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must 
be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter 
in even position (the first character is in position 0),
reverse the whole result.



# --------------------------PROBLEM--------------------------

# Input: string and integer
# Output: 
# ---------------------------RULES---------------------------
# Explicit: shift each letter by a given number but the transformed letter must 
be a letter (circular shift),
replace each digit by its complement to 9,
0 1 2 3 4 5 6 7 8 9 

2 compliment is 7 (9 -2)
3 compliment is 6 (9 - 3)etc

keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter 
in even position (the first character is in position 0),
reverse the whole result.

# Implicit: 

# --------------------------EXAMPLES-------------------------

your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"


# ----------------------------ALGO---------------------------
# 
create an array of all letters in alphabet
creat an empty array
split the string into an array
iterate over the array 
if the current element is a letter 
 - shift it n letters in the alphabet
    - do this by selecting an index n higher from the letters array
 - add it to the new array
 else if the current elment is a number 
 - change the number to the result of 9 - num
 - push the result to the new array

 iterate over the new array 
 upcase each even index letter
 downcase each odd index letter

 reverse the order of the new array and return it

*/
function playPass(str, n) {
  let letters = Array.from('abcdefghijklmnopqrstuvwxyz')
  let  numbers = [0,1,2,3,4,5,6,7,8,9]
  let passArr = [];
  str.split('').forEach(el => {
    if (el === ' ') {
      passArr = passArr.concat(el)
    } else if (letters.includes(el.toLowerCase())) {
      let newIdx = letters.findIndex(char => char === el.toLowerCase()) + n;
      
      if (newIdx > 25) {
        newIdx = newIdx - 26;
      }

      passArr = passArr.concat(letters[newIdx])
    } else if (numbers.includes(Number(el))) {
      passArr = passArr.concat(9 - Number(el))
    } else {
      passArr = passArr.concat(el)
    }
  })
  console.log(passArr)
  let newPass =passArr.map((el, idx) => {
    if (idx % 2 === 0 && letters.includes(el)) {
      return el.toUpperCase();
    } else if (idx % 2 === 1 && letters.includes(el)) {
      return el;
    } else {
      return el;
    }
  })
  return newPass.reverse().join('')
}

console.log(playPass("I LOVE YOU!!!", 1)) //, "!!!vPz fWpM J")

console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)) //, 
   // "4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO")