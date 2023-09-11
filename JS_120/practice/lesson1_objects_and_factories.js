// Question 1

// let book1 = {
//   title: 'Mythos',
//   author: 'Stephen Fry',

//   getDescription() {
//     return `${this.title} was written by ${this.author}`;
//   },
// }

// let book2 = {
//   title: 'Me Talk Pretty One Day',
//   author: 'David Sedaris',

//   getDescription() {
//     return `${this.title} was written by ${this.author}`;
//   },
// }

// let book3 = {
//   title: "Aunts aren't Gentlemen One Day",
//   author: 'PG Wodehouse',

//   getDescription() {
//     return `${this.title} was written by ${this.author}`;
//   },
// }

// console.log(book2.getDescription()) // logs 'Me Talk Pretty One Day was written by David Sedaris'

// Question 2

// Is there any unnecisary code or duplication in the code above.
// Yes - the getDexcription method is exactly the same for all 3.

// Question 3

// Implement a factory function for our books objects that we can use with the following code:

// function createBook(title, author) {
//   return {
//     title, // same as title: title,
//     author, // same as author: author,

//     getDescription: function() {
//       return `${this.title} was written by ${this.author}`;
//     },
//   };
// }

// let book1 = createBook('Mythos', 'Stephen Fry');
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

// console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
// console.log(book2.getDescription());  // "Me Talk Pretty One Day was written by David Sedaris."
// console.log(book3.getDescription());  // "Aunts aren't Gentlemen was written by PG Wodehouse"

// Question 4

// Add a read property with initial value of false to the book Object.

// function createBook(title, author) {
//     return {
//       title, // same as title: title,
//       author, // same as author: author,
//       read: false,

//       getDescription: function() {
//         return `${this.title} was written by ${this.author}`;
//       },
//     };
//   }

// let book1 = createBook('Mythos', 'Stephen Fry');
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

// console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
// console.log(book2.getDescription());  // "Me Talk Pretty One Day was written by David Sedaris."
// console.log(book3.getDescription());  // "Aunts aren't Gentlemen was written by PG Wodehouse"

// console.log(book1.read);
// console.log(book2.read);
// console.log(book3.read);

// Question 5
// Modify the factory function to use an optional read parameter with a defaut value of false

// function createBook(title, author, read = false) {
//   return {
//     title, // same as title: title,
//     author, // same as author: author,
//     read,

//     getDescription: function() {
//       return `${this.title} was written by ${this.author}`;
//     },
//   };
// }

// let book1 = createBook('Mythos', 'Stephen Fry');
// let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
// let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

// console.log(book1.read); // => false
// console.log(book2.read); // => false
// console.log(book3.read); // => true

// Question 6
// let's add a method readBook, that marks a book object as read by setting the read property to true:

function createBook(title, author, read = false) {
  return {
    title, // same as title: title,
    author, // same as author: author,
    read,

    readBook: function() {
      this.read = true;
    },

    getDescription: function() {
      // if (this.read === false) {
      //   return `${this.title} was written by ${this.author}. I haven't read this book.`;
      // } else {
      //   return `${this.title} was written by ${this.author}. I have read this book.`;
      // };
      // can do the above with a ternary
      return `${this.title} was written by ${this.author}. ` + `I ${this.read ? 'have' : "haven't"} read it.`;
    },
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');

console.log(book1.getDescription()); // Mythos was written by Stephen Fry. I haven't read this book.
book1.readBook();
console.log(book1.getDescription()) // Mythos was written by Stephen Fry. I have read this book.
