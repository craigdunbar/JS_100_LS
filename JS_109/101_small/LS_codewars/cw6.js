/*
# -----------------------INSTRUCTIONS------------------------
Repeated substring
For a given nonempty string s find a minimum substring t 
and the maximum number k, such that the entire string s 
is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :
an array [t, k] (in Ruby and JavaScript)

# --------------------------PROBLEM--------------------------

# Input: string
# Output: an array with the t and k
where t is the minimum substring and k is integer of times repeated
# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
Example #1:

s = "ababab"; // ["ab", 3]

Example #2:

s = "abcde" // ["abcde", 1]
because for this string "abcde" the minimum substring t, 
such that s is t repeated k times, is itself.

# ----------------------------ALGO---------------------------
# given the string argument, s,  find the substring, t,  that can be 
repeated k number of times to create the string
determine the substring that repeats within the given string
example 'ababab'
- create substrings starting at index 0 
a is this the same as the index + 1 character 
no so make the next substring
ab next susbtring of same length is ab so this is the pattern
start = 0
end = 1
first substring is str.slice(0, 1) compare to slice(1, 2)
first is slice(start, end) compare to slice(end, end * 2)
end ++
start = 0
end = 2
next is str.slice(0, 2) compare with slice(2, 4)
slice(0, end) copmpare slice(end, end * 2)
if this is a match get the length of the substring in this case 2
divide the string length by 2 in this case 6 / 2 = 3
push the substring and the integer to an array and return it
*/
function repeated(str) {
  let start = 0;
  let end = 1;
  let arr = [];
  let first = '';
  let second = '';

  for (let count = 0; count < str.length; count++) {
    first = str.slice(start, end);
    second = str.slice(end, end * 2)
    if (first === second) {
      break;
    } else {
      end ++
    }
  }
  let num = str.length / first.length;
      arr = arr.concat(first, num);
  return arr;
}

console.log(repeated("ababab")) //, ["ab", 3])
console.log(repeated("abcde")) //, ["abcde", 1])