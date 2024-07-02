// 19.Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList: string[] = ["Saim", "Jamal", "Sahiba"];
// guestList.forEach((guest) => {
    // console.log(`Hello ${guest}, You are invited for dinner!`);
//   });

let guestCount: number = guestList.length;
console.log(`We're inviting total ${guestCount} guest`);