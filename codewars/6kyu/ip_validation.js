/*
# -----------------------INSTRUCTIONS------------------------
Write an algorithm that will identify valid IPv4 addresses 
in dot-decimal format. IPs should be considered valid if 
they consist of four octets, with values between 0 and 255, inclusive.

# --------------------------PROBLEM--------------------------

# Input: string
# Output: boolean
# ---------------------------RULES---------------------------
# Explicit: 
    Leading zeros (e.g. 01.02.03.04) are considered invalid
    Inputs are guaranteed to be a single string


# Implicit: 

# --------------------------EXAMPLES-------------------------
Examples of valid inputs:
1.2.3.4
123.45.67.89


# ----------------------------ALGO---------------------------
# 9
split the string into an array of digits dot delimited
iterate over the array and convert the string to a number and 
make sure it's bigger than 0 and less than 250
if it contains a leading zero return false
if it contains alphabetical characters return false

*/

function isValidIP(str) {
  if (str.length === 0) return false;
  
  let arr = str.split('.');

  if (arr.length !== 4) return false;
  for (let i = 0; i < arr.length; i ++) {
    if(arr[i] === '') return false
    let noLetters = arr[i].replace(/[^0-9]/gi, '')
    if (noLetters !== arr[i]) return false
    if (arr[i].split('')[0] === '0' && arr[i].split('').length > 1)   return false;
    if (Number(arr[i]) < 0 || Number(arr[i] > 255)) return false
  }
  return true;
}

console.log(isValidIP("0.0.0.0"        ) ===  true);
console.log(isValidIP("12.255.56.1"    ) ===  true);
console.log(isValidIP("137.255.156.100") ===  true);
console.log(isValidIP(''               ) === false);
console.log(isValidIP('abc.def.ghi.jkl') === false);
console.log(isValidIP('123.456.789.0'  ) === false);
console.log(isValidIP('12.34.56'       ) === false);
console.log(isValidIP('01.02.03.04'    ) === false);
console.log(isValidIP('256.1.2.3'      ) === false);
console.log(isValidIP('1.2.3.4.5'      ) === false);
console.log(isValidIP('123,45,67,89'   ) === false);
console.log(isValidIP('1e0.1e1.1e2.2e2') === false);
console.log(isValidIP(' 1.2.3.4'       ) === false);
console.log(isValidIP('1.2.3.4 '       ) === false);
console.log(isValidIP('12.34.56.-7'    ) === false);
console.log(isValidIP('1.2.3.4\n'      ) === false);
console.log(isValidIP('\n1.2.3.4'      ) === false);