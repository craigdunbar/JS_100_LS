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
# split the strig into an array of words
while arr.length > 1
iterate over the array and get each word
reverse the words and add them to a holding array
get the length of the holding array
usr this length to dtermine what elements to combine
- first and second elements
- third and fourth etc.
- if odd number leave the last one
add these combinations to another array
reassign the words array to this new array
return the words array
this process should continue until the length of the words array is 1
*/

function reverse_and_combine_text(str){
  let arr = str.split(" ");
  let results = [];
console.log(arr)
  while (arr.length > 1) {
  
    for (let i = 0; i < arr.length; i+=2) {
      if (i === (arr.length - 1))  {
        results.push(arr[i].split("").reverse().join(""))
        break
      }

      const firstWord = arr[i].split("").reverse().join("")
      const secondWord = arr[i + 1].split("").reverse().join("")
      console.log(firstWord, secondWord)
      results.push(`${firstWord}${secondWord}`)
      console.log(results)
    }
    
    arr = results
    results = []
  }
  
  return arr[0];
}

console.log(reverse_and_combine_text("abc def")) //, "cbafed")
console.log(reverse_and_combine_text("abc def ghi jkl")) //, "defabcjklghi")
console.log(reverse_and_combine_text("dfghrtcbafed")) //, "dfghrtcbafed")
console.log(reverse_and_combine_text("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12 44")) //, "trzwqfdstrteettr45hh4325543544hjhjh21lllll")