// Even numbers

let count = 2
while(count <= 99) {
  console.log(count);
  count += 2
}

// using for loop
for (let i = 1; i <= 99; i += 2) {
  if (i % 2 === 0) {
    console.log(i)
  } else {
    continue
  }
}