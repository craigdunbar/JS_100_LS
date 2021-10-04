// capitalize words

let str = 'Launch school tech & talk'
let newStr = str.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1));
console.log(newStr);