// let book1 = {
//   title: 'Mythos',
//   author: 'Stephen Fry',

//   getDescription() {
//     console.log(`${title} was written by ${author}`)
//   },
// }

// let book2 = {
//   title: 'Me Talk Pretty One Day',
//   author: 'David Sedaris',

//   getDescription() {
//     console.log(`${title} was written by ${author}`)
//   },
// }

// let book3 = {
//   title: "Aunts aren't Gentlemen One Day",
//   author: 'PG Wodehouse',

//   getDescription() {
//     console.log(`${title} was written by ${author}`)
//   },
// }

// use factory function 

// function createBook(title, author) {
//   return {
//     title: title,
//     author: author,

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}`)
//     },
//   };
// }

// using shorthand notation for property and variables having the same name

// function createBook(title, author) {
//   return {
//     title,
//     author,

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}`)
//     },
//   };
// }

// let book1 = createBook('Mythos', 'Stephen Fry');
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

// book1.getDescription();  // "Mythos was written by Stephen Fry."
// book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
// book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

// adding the read property

// function createBook(title, author) {
//   return {
//     title,
//     author,
//     read: false,

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}`)
//     },
//   };
// }

// let book1 = createBook('Mythos', 'Stephen Fry');
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

// book1.getDescription();  // "Mythos was written by Stephen Fry."
// book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
// book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

// console.log(book1.read); // => false
// console.log(book2.read); // => false
// console.log(book3.read); // => false

// Modify the factory function to use an optional read parameter with a default value of false.

// function createBook(title, author, read = false) {
//   return {
//     title,
//     author,
//     read,

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}`)
//     },
//   };
// }

// let book1 = createBook('Mythos', 'Stephen Fry');
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

// book1.getDescription();  // "Mythos was written by Stephen Fry."
// book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
// book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

// console.log(book1.read); // => false
// console.log(book2.read); // => false
// console.log(book3.read); // => true

// add a method, readBook, that marks a book object as read by setting the read property to true:

// function createBook(title, author, read = false) {
//   return {
//     title,
//     author,
//     read,

//     readBook() {
//       this.read = true;
//     },

//     getDescription() {
//       console.log(`${this.title} was written by ${this.author}`)
//     },
//   };
// }

// update getDescription function to reflect the read state directly,

// function createBook(title, author, read = false) {
//   return {
//     title,
//     author,
//     read,

//     readBook() {
//       this.read = true;
//     },

//     getDescription() {
//       if (this.read === true) {
//         return `${this.title} was written by ${this.author}. I have read it`;
//       } else {
//         return `${this.title} was written by ${this.author}. I haven't read it`;
//       }
//     },
//   };
// }

// using a ternary operator

function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    readBook() {
      this.read = true;
    },

    getDescription: function() {
      return `${this.title} was written by ${this.author}. ` +
             `I ${this.read ? 'have' : "haven't"} read it.`;
    },
  };
}
let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

console.log(book1.getDescription()); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
console.log(book1.getDescription()); // Mythos was written by David Fry. I have read it.