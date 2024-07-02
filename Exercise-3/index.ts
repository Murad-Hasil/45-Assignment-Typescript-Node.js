// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let person_Name: string = "Murad Hasil";
console.log(`Lowercase Name: ${person_Name.toLocaleLowerCase()}`);
console.log(`Uppercase Name: ${person_Name.toLocaleUpperCase()}`);
console.log(
  `Titlecase Name: ${
    person_Name.charAt(0).toUpperCase() +
    person_Name.slice(1).toLocaleLowerCase()
  }`
);
