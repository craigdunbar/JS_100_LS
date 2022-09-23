/*
/*
# -----------------------INSTRUCTIONS------------------------
Reversed Arrays
Write a function that takes an Array as an argument and reverses 
its elements in place. That is, mutate the Array passed into this method. 
The return value should be the same Array object.

# --------------------------PROBLEM--------------------------

# Input: array
# Output: original array but reversed
# ---------------------------RULES---------------------------
# Explicit: You may not use Array.prototype.reverse().

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

we need to swap the position of the elements within the array
ie element at start becomes element at end and vice versa
element second becomes element second from end and vice versa

to do this we need to iterate over the array
select an  element at arr[count] and swap it with the element at arr.length - count
ie for 4 element array 
   - count 0 swaps with element at (arr.length - 1) - count or 3
   - count 1 swaps with element at 2
  if odd then middle character remains in place
*/
function reverse(arr) {
  let length = arr.length;
  let middle = Math.floor(arr.length / 2);

  for (let count = 0; count < middle; count++) {
    let first = arr[count];
    let last = arr[(length -1) - count];
    arr[count] = last;
    arr[(length -1) - count] = first
    // console.log(arr);
  }
  return arr;
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