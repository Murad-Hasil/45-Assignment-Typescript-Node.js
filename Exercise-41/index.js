"use strict";
// 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach((name) => console.log(name));
}
let megicians_names = ["Ali", "Osama", "Asif"];
show_magicians(megicians_names);
