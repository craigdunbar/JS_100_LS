/*
# -----------------------INSTRUCTIONS------------------------
Inventory item availability

# --------------------------PROBLEM--------------------------
Using the previous exercise, write a function that returns true or 
false based on whether or nor an inventory item is available.
the fuction takes the same two arguments snf returnd true if the 
sum of the quantity values is greater than zero. ie number of in
items must be more than that going out.

# Input: array of objects
# Output: filtered array of objects

# ---------------------------RULES---------------------------
# Explicit: 

# Implicit: 

# --------------------------EXAMPLES-------------------------
isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
# ----------------------------ALGO---------------------------
# use the return value of "transactionFor" function from last exercise
get the sum of the quantity key 
return true if the quantity is greater than zero
*/
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(num, array) {
   return array.filter(object => object.id === num);
  }
  
 function isItemAvailable(num, array) {
  let selectedArr = transactionsFor(num, array);
  let total = 0;
  for (let count = 0; count < selectedArr.length; count++) {
    let currentItem = selectedArr[count];
    currentItem['movement'] === 'in' ? total += currentItem['quantity'] : total -= currentItem['quantity']
   }
  return total > 0 ? 'true' : 'false'
 }
 
 console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));