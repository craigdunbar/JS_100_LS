// continue

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
for (let count = 0; count < cities.length; count += 1) {
  if (cities[count] === null) {
    continue;
  }
  console.log(cities[count]);
}
