"use strict";
// 27.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// first version
let alien_color = "green";
if (alien_color === "green") {
    console.log("(Version 01) Alien color is green, player earned 5 points.");
}
else if (alien_color === "yellow") {
    console.log("(Version 01) Alien color is yellow, player earned 10 points.");
}
else if (alien_color === "red") {
    console.log("(Version 01) Alien color is red, player earned 15 points.");
}
// second version
let alienColor = "yellow";
if (alienColor === "green") {
    console.log("(Version 02) Alien color is green, player earned 5 points.");
}
else if (alienColor === "yellow") {
    console.log("(Version 02) Alien color is yellow, player earned 10 points.");
}
else if (alienColor === "red") {
    console.log("(Version 02) Alien color is red, player earned 15 points.");
}
// third version
let aliencolor = "red";
if (aliencolor === "green") {
    console.log("(Version 03) Alien color is green, player earned 5 points.");
}
else if (aliencolor === "yellow") {
    console.log("(Version 03) Alien color is yellow, player earned 10 points.");
}
else if (aliencolor === "red") {
    console.log("(Version 03) Alien color is red, player earned 15 points.");
}
