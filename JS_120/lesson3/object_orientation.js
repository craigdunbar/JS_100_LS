// Suppose we want to use code to keep track of products in our hardware store's inventory. 
// A first stab might look something like this:

// let scissorsId = 0;
// let scissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;

// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;

// use objects to organize the two groups

// let scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
// };

// let drill = {
//   id: 1,
//   name: 'Drill',
//   stock: 15,
//   price: 45,
// }

// ex2
// Create a function that takes one of our product objects as an argument, 
// and sets the object's price to a non-negative number of our choosing, 
// passed in as a second argument. 
// If the new price is negative, alert the user that the new price is invalid.

// function setProductPrice(product, newPrice) {
//   if (newPrice >= 0) {
//     product.price = newPrice;
//   } else {
//     alert('Invalid proce!');
//   }
// }

// ex3
// output descriptions of the products ie

// describeProduct(scissors);
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8

// function describeProduct(product) {
//   console.log('Name: ' + product.name);
//   console.log('ID: ' + product.id);
//   console.log('Price: $' + product.price);
//   console.log('Stock: ' + product.stock);
// }
// describeProduct(scissors)

// ex4
// Rewrite the code such that the functions describeProduct and 
// setProductPrice become methods describe and setPrice on both 
// our scissors and drill objects.

// let scissors = {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
//   setPrice(newPrice){
//     if (newPrice >= 0) {
//       this.price = newPrice;
//     } else {
//       alert('Invalid proce!');
//     }
//   },

//   describe() {
//     console.log('Name: ' + this.name);
//     console.log('ID: ' + this.id);
//     console.log('Price: $' + this.price);
//     console.log('Stock: ' + this.stock);
//   }
// };

// let drill = {
//   id: 1,
//   name: 'Drill',
//   stock: 15,
//   price: 45,
//   setPrice(newPrice){
//     if (newPrice >= 0) {
//       this.price = newPrice;
//     } else {
//       alert('Invalid proce!');
//     }
//   },

//   describe() {
//     console.log('Name: ' + this.name);
//     console.log('ID: ' + this.id);
//     console.log('Price: $' + this.price);
//     console.log('Stock: ' + this.stock);
//   }
// }
// ex5
// use a factory function to generate a new function createProduct 
// which takes arguments for id, name, stock, and price and also adds 
// setPrice and describe to the new object.

function createProduct(id, name, stock, price, newPrice) {
  let newProduct = {};
  newProduct.id = id,
  newProduct.name = name,
  newProduct.stock = stock,
  newProduct.price = price,
  newPrice,
  newProduct.setPrice = function(newPrice) {
    if (newPrice >= 0) {
      this.price = newPrice;
    } else {
      alert('Invalid proce!');
    }
  },

  newProduct.describe = function() {
    console.log('Name: ' + this.name);
    console.log('ID: ' + this.id);
    console.log('Price: $' + this.price);
    console.log('Stock: ' + this.stock);
  };
  return newProduct;
}
let scissors = createProduct(0, 'Scissors', 10, 8, 12);
let drill = createProduct(1, 'Cordless Drill', 15, 45)
let saw = createProduct(2, 'Circular Saw', 12, 95);
let hammer = createProduct(3, 'Sledge Hammer', 78, 45);
let boxCutter = createProduct(4, 'Box Cutter', 41, 15);

console.log(createProduct(scissors));