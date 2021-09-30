// greetings from Jane

let jane = {
  firstNamme: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhaus',
  },
  occupation: 'engineer',
  greet: (name) => console.log(`Hej ${name}`),
};

jane.greet('Bobby');