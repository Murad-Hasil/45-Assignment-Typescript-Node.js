"use strict";
// 42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach((name) => console.log(name));
}
function make_great(magicians) {
    return magicians.map((name) => `The Great ${name}`);
}
let magicians_names = ["Ali", "Osama", "Asif"];
let make_magicians = make_great(magicians_names);
show_magicians(make_magicians);
