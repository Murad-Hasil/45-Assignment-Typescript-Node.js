"use strict";
// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let shrinkingGuestList = ["Baba", "Kamal", "Shah", "Hasil", "Saim", "Jamal", "Abrar"];
console.log("Unfortunately! our new dinner table won't arrive in the time, so we can only invite two people");
// removing guest from the list
while (shrinkingGuestList.length > 2) {
    let removeGuest = shrinkingGuestList.pop();
    if (removeGuest !== undefined) {
        console.log(`Dear ${removeGuest}, Sorry we can't invite you for dinner!`);
    }
}
// printing message to last two guest, letting them know they are invited for dinner
shrinkingGuestList.forEach((guest) => console.log(`Hello ${guest}, You are still invited to dinner.`));
// removing the last two guest from the list
// shrinkingGuestList.splice(0, 2);
shrinkingGuestList.splice(0, shrinkingGuestList.length);
// printing updated list of guest
console.log("Updated list of guest:", shrinkingGuestList);
