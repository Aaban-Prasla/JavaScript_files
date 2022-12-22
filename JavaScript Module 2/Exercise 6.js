"use strict";

function dice_roll() {
    let number = Math.floor(Math.random() * 7)
    while (number < 6) {
        number = Math.floor(Math.random() * 7)
        document.getElementById("list of dice rolls").innerHTML += `<li>${number}</li>`;
    }
}

dice_roll()