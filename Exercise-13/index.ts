// 13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = [
  "Suzuki 150",
  "Alto VXL",
  "Honda City",
  "Chevrolet Camaro",
];

transportation.map((transport) => {
  console.log(`I would like to own a ${transport}`);
});
console.log(`And ${transportation[3]} is my Dream.`);
