// 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function createCar(
  manufacturer: string,
  model: string,
  ...option: [string, any][]
) {
  let car: any = {
    manufacturer: manufacturer,
    model: model,
  };
  for (let options of option) {
    car[options[0]] = options[1];
  }

  return car;
}
let myCar: any = createCar(
  "Toyota",
  "Corolla",
  ["color", "black"],
  ["year", 2025]
);
console.log(myCar);