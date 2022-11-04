/*
# -----------------------INSTRUCTIONS------------------------
The input is a string str of digits. Cut the string into chunks 
(a chunk here is a substring of the initial string) of size sz 
(ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of 
its digits is divisible by 2, reverse that chunk; 
otherwise rotate it to the left by one position. 
Put together these modified chunks and return the result as a string.

If

    sz is <= 0 or if str is empty return ""
    sz is greater (>) than the length of str it is impossible 
    to take a chunk of size sz hence return "".


# --------------------------PROBLEM--------------------------

# Input: 
# Output: 
# ---------------------------RULES---------------------------
# Explicit: If a chunk represents an integer such as the sum of the cubes of 
its digits is divisible by 2, reverse that chunk; 
otherwise rotate it to the left by one position. 
Put together these modified chunks and return the result as a string.

# Implicit: 

# --------------------------EXAMPLES-------------------------
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"

Example of a string rotated to the left by one position:
s = "123456" gives "234561".
# ----------------------------ALGO---------------------------
# revrot("123456987654", 6) --> "234561876549" 
chunks are 123456 987654 both are 6 long
sum of cubes of digits s1 (using map and reduce) = 441 not dividable by 2 
- rotate to left by one position => 234561

sum of cubes of s2 = 1989 not divisable by 2
- rotate to the left by one => 876549

join them togther 234561876549

if chunk is divisable by 2 then reverse the chunk
need to use a loop 

ALGO **********

if num <= 0 return ''
if num > str.length return ''
initalise a loop
 - start at count = 1 and end at str.length / num
split the string into chunks using slice
start = 0;
end = num 
- first substring => str.slice(start, end)
start += num
end = start + num
second sunstriong =>  str.slice(num, end

map the arrays with the result of **3 on each element
use reduce to get a single int 
if the int % 2 === 0 
 - reverse the array
else 
- move the first digit to the end
- use shift and concat
join the two array's and return it
*/
function revrot(str, num) {
  if (num <= 0 || num > str.length) return '' 

  let chunkArr = [];
  let start = 0;
  let end = num;
  for (let count = 1; count <= str.length / num; count ++) {
      substring = str.slice(start, end);
      chunkArr.push(substring)
      start += num;
      end = start + num;
  }

  return chunkArr.map(chunk => {
    let result = chunk.split('').map(el => el ** 3).reduce((acc, val) => acc + val,0);
    if (result % 2 === 0) {
      return chunk = chunk.split('').reverse().join('')
    } else {
      element = chunk.split('')[0]
      chunk = chunk.concat(element);
      return chunk = chunk.slice(1)
    }
  }).join('');
}
console.log(revrot("123456987654", 6) === "234561876549")
console.log(revrot("123456987653", 6) === "234561356789")
console.log(revrot("66443875", 4) === "44668753")
console.log(revrot("66443875", 8) === "64438756")
console.log(revrot("664438769", 8) === "67834466");
console.log(revrot("123456779", 8) === "23456771");
console.log(revrot("", 8) === "")
console.log(revrot("123456779", 0) === "" );
console.log(revrot("563000655734469485", 4) === "0365065073456944");