"use strict";

let dog_names = [];
let x = 0;

while (x < 6) {
    const name = prompt("Enter the dog's name.");
    dog_names.push(name);
    x++;
}

dog_names.sort();
dog_names.reverse();

for (x of dog_names) {
    document.getElementById("list").innerHTML += `<li>${x}</li>`;
}


