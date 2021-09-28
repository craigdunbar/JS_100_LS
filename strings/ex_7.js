function isBlank(str) {
    return str.length > 0 ? true : false
}

console.log(isBlank('mars'));
console.log(isBlank('  '));
console.log(isBlank(''));