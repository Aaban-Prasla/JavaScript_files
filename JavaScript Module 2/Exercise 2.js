"use strict";

let participant_list = [];
const amount_of_participants = parseInt(prompt("How many participants?"));
let x = 0;

while (x < amount_of_participants) {
    const name = prompt("Enter name.");
    participant_list.push(name);
    x++;
}

participant_list.sort();

for (x of participant_list) {
    document.getElementById("list").innerHTML += `<li>${x}</li>`;
}