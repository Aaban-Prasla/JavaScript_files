"use strict";

const x_sided_dice = parseInt(prompt("Enter how sides the dice has."))

function dice_roll(number_of_sides) {
    let roll = Math.floor(Math.random() * number_of_sides + 1)
    while (roll < number_of_sides) {
        roll = Math.floor(Math.random() * number_of_sides + 1)
        document.getElementById("list of dice rolls").innerHTML += `<li>${roll}</li>`;
    }
}

dice_roll(x_sided_dice)