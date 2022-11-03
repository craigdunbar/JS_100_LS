const { promptLoop, setDefaultOptions } = require("readline-sync");

function allSubs(str) {
  let subArr = [];

  for (let i = 0; i < str.length; i++) {
    let substring = str.slice(i)
    // console.log(substring) // asd
                            // sd
                            // d

    for (let count = 0; count < substring.length; count ++) {
      let substrings = substring.slice(0, count + 1);
      // first substring 'asd'
      // first iteration count = 0 + 1 = 1 => a
      // 2nd             count = 1 + 1 = 2 => as 
      // 3rd             count = 2 + 1 = 3 => asd
      // substring length = 3 so exit loop

      // next iteration substring sd 
      // first count = 0 + 1 => s
      // second count = 1 + 1 => sd 
      // susbstring length = 2 so exit loop 

      // next iteration susbstring d 
      // first count = 0 + 1 => d 
      // substring length = 1 so exit loop 

// when I started with count = 1 it didn't work why?

// for (let count = 0; count < substring.length; count ++) {
//   let substrings = substring.slice(0, count + 1);

 // first substring 'asd'
      // first iteration count = 1 => a
      // 2nd             count = 2 => as 
      // 3rd             count = 3 => exits before generating asd because
      // substring length = 3 

      // next iteration substring sd 
      // first count = 1 => s
      // second count = 2 => exits before generating sd because
      // susbstring length = 2 

      // next iteration susbstring d 
      // first count = 1 => exits immedietly before generating d since 
      // substring length = 1 so exit loop 

      subArr = subArr.concat(substrings)
    }
  }
  return subArr;
}
console.log(allSubs('asd'));