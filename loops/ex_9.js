// finding nemo

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
for (let element in fish) {
  if (fish[element] === 'Nemo') {
    console.log(fish[element]);
    break;
  } else {
  console.log(fish[element]);
  }
}

// or LS solution
for (let i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);

  if (fish[i] === 'Nemo') {
    break;
  }
}