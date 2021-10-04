// vocabulary

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];
newArr = vocabulary.flat();
newArr.forEach(el => console.log(el));

// LS solution
// let vocabulary = [
//   ['happy', 'cheerful', 'merry', 'glad'],
//   ['tired', 'sleepy', 'fatigued', 'drained'],
//   ['excited', 'eager', 'enthused', 'animated']
// ];

// for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
//   let synonyms = vocabulary[vocabularyIdx];

//   for (let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
//     console.log(synonyms[synonymIdx]);
//   }
// }