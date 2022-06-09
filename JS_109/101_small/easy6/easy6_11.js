/*
# -----------------------INSTRUCTIONS------------------------
Reversed Arrays
Write a function that takes an Array as an argument and reverses 
its elements in place. That is, mutate the Array passed into this method. 
The return value should be the same Array object.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: new array
# ---------------------------RULES---------------------------
# Explicit: 
You may not use Array.prototype.reverse().

# Implicit: 

# --------------------------EXAMPLES-------------------------
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
# ----------------------------ALGO---------------------------
# to change the elements in place we need to reassign the elements
within the array
first element and last element swap
second element and second last element swap 
and so on.
middle element if odd length stays the same

iterate over the given array
assign a variable called first to the current count
assign a variable last to the ((array.length - 1) - count)
first = last and last = first
repeat this for all the elements except the middle element if odd
this element satys the same
*/
function reverse(list) {
  let elementCount = list.length;
  let middle = Math.ceil(elementCount / 2)

  for (let idx = 0; idx < middle; idx++) {
    let first = list[idx];
    let last = list[(elementCount - 1) - idx];
    list[idx] = last;
    list[(elementCount - 1) - idx] = first;
  }
  return list;
}
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true