// Q1
// To keep track of products in a hardware store we could do:

// let scissorsId = 0;
// let sciissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;

// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;

// Use objects to organize these two groups of data:

// let scissors =  {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
// };

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45, 
// };

// Q2
// Create a function that takes one of the products as an argument and sets the objects price, that's
// passed in as a second argument. The price should be a non-negative number. If it;s negative
// alert the user that the price is invalid

// function changePrice(product, newPrice) {
//   if (newPrice < 0) {
//     console.log('Invalid price')
//   } else {
//   product.price = newPrice;
//   }

//   console.log(product.price)
// }

// changePrice(drill, 11)

//Q3
// Implement a functin that outputs a description of the product ie:
// describeProduct(scissors);
// => Name: Scissors
// => ID: 0
// => Price: $10
// => Stock: 8

// function getDescription(product) {
//   console.log(`=> Name: ${product.name}`)
//   console.log(`=> ID: ${product.id}`)
//   console.log(`=> Price: ${product.price}`)
//   console.log(`=> Stock: ${product.stock}`)
// }

// getDescription(scissors)

//Q4
// Rewrite the above code so that both functions become methods describe and setPrice on both
// drill and scissors objects.

// let scissors =  {
//   id: 0,
//   name: 'Scissors',
//   stock: 8,
//   price: 10,
//   setPrice(newPrice) {
//     if (newPrice < 0) {
//     console.log('Invalid price')
//     } else {
//     product.price = newPrice;
//     }
//   },

//   describe() {
//     console.log(`=> Name: ${product.name}`)
//     console.log(`=> ID: ${product.id}`)
//     console.log(`=> Price: ${product.price}`)
//     console.log(`=> Stock: ${product.stock}`)
//   },
// };

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45, 
//   setPrice(newPrice) {
//     if (newPrice < 0) {
//     console.log('Invalid price')
//     } else {
//     product.price = newPrice;
//     }
//   },

//   describe() {
//     console.log(`=> Name: ${product.name}`)
//     console.log(`=> ID: ${product.id}`)
//     console.log(`=> Price: ${product.price}`)
//     console.log(`=> Stock: ${product.stock}`)
//   },
// };

//Q5
// Since the code above is inefficiently duplicating methods in each object, write a factory function
// createProduct that takes arguments for id, name, price and stock and adds setPrice and describe methods 
// to the new object

function createProduct(id, name, stock, price) {
  let newProduct = {};
  newProduct.name = name;
  newProduct.id = id;
  newProduct.price = price;
  newProduct.stock = stock;

  newProduct.setPrice = function(newPrice) {
    if (newPrice < 0) {
    console.log('Invalid price')
    } else {
    product.price = newPrice;
    }
  };

  newProduct.describe = function() {
    console.log(`=> Name: ${this.name}`)
    console.log(`=> ID: ${this.id}`)
    console.log(`=> Price: ${this.price}`)
    console.log(`=> Stock: ${this.stock}`)
  };

  return newProduct;
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let hammer = createProduct(2, 'Hammer', 3, 15);
let saw = createProduct(3, 'Saw', 6, 75);

console.log(saw.describe())