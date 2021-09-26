function greet(language) {
  switch(language) {
    case 'en':
      console.log('Hi!');
      break;
    case 'fr':
      console.log('Salut!');
      break;
    case 'pt':
      console.log('Ola!');
      break;
    default:
      console.log('Sorry not a recognized language');
  }
}
// or LS sol (using return so no break statement needed.)
// function greet(languageCode) {
//   switch (languageCode) {
//     case 'en': return 'Hi!';
//     case 'fr': return 'Salut!';
//     case 'pt': return 'Olá!';
//     case 'de': return 'Hallo!';
//     case 'sv': return 'Hej!';
//     case 'af': return 'Haai!';
//   }
// }

// Example:
// console.log(greet('sv'));
greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('nz');