/*
# -----------------------INSTRUCTIONS------------------------
Your task is to Reverse and Combine Words.
It's not too difficult, but there are some things you have to consider...
So what to do?

Input: String containing different "words" separated by spaces
1. More than one word? Reverse each word and combine first with second,
third with fourth and so on...
(odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...

# --------------------------PROBLEM--------------------------

# Input: string
# Output: string
# ---------------------------RULES---------------------------
# Explicit:

# Implicit:

# --------------------------EXAMPLES-------------------------
Input: "abc def"
Output: "cbafed"

Input: "abc def ghi 123"
Output: "defabc123ghi"

Input: "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"

# ----------------------------ALGO---------------------------
# 
"abc def ghi 123" // ['abc', 'def', 'ghi', 123]
first loop : [cbafed, ihg123} // arr.length > 1
second loop [defabc321ghi] // arr.length === 1 break

split the string into an array of words
iterate over the array
while array.length > 1 
initalise inner loop  to reverse and combine elements
 - for( let i = 0; i < arr.length ; i +2) 
 - new element = arr[i].reverse + arr[i + 1].reverse
 - push new element to an empty array

 assign the arr to the array woth the new elements
 empty the new elements array ready to be filled again on next loop
*/
function reverse_and_combine_text(str) {
  let arr = str.split(' ');
  let newArr = [];

  while (arr.length > 1) {

    for (let i = 0; i < arr.length; i += 2) {
      if (i === (arr.length - 1)) {
        newArr.push(arr[i].split('').reverse().join(''));
        break;
      }
     
      let first = arr[i].split('').reverse().join('');
      let second = arr[i +1].split('').reverse().join('');
      newArr.push(first+second)
    }
    arr = newArr;
    newArr = [];
  }
  return arr[0];
}

console.log(reverse_and_combine_text("abc def") === "cbafed");
console.log(reverse_and_combine_text("abc def ghi jkl") === "defabcjklghi");
console.log(reverse_and_combine_text("dfghrtcbafed") === "dfghrtcbafed");
console.log(reverse_and_combine_text("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44") === "trzwqfdstrteettr45hh4325543544hjhjh21lllll");
console.log(reverse_and_combine_text("sdfsdf wee sdffg 342234 ftt") === "gffds432243fdsfdseewttf");