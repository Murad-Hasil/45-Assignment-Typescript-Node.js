"use strict";
// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let placesToVisit = ["egypt", "russia", "canada", "france", "italy"];
// Printing original order
console.log("Original Order:", placesToVisit);
// Printing in alphabetical order
console.log("Alphabetical Order:", placesToVisit.slice().sort());
// Showing that original order is still there
console.log("Original Order After Sorting:", placesToVisit);
// Printing in reverse alphabetical order without changing original order
console.log("Reverse Alphabetical Order:", placesToVisit.slice().sort().reverse());
// Showing again that original order is still there
console.log("Original Order After Reversing Sorting:", placesToVisit);
// Reversing the order of the list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reversing the order of the list again
placesToVisit.reverse();
console.log("Back to Original Order Again:", placesToVisit);
// Sorting the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical Order:", placesToVisit);
// Sorting the array so it's stored in reverse alphabetical order
placesToVisit.sort().reverse();
console.log("Sorted in reverse alphabetical Order:", placesToVisit);
