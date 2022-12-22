"use strict";

let number_list = [];

while (true) {
    let number = parseInt(prompt("Enter a number. Enter previously entered number to exit."));
    if (number_list.includes(number)) {
        alert("Number is already been given.");
        break;
    }
    else {
        number_list.push(number);
    }
}

number_list.sort()

let x = 0;

while (x < number_list.length) {
    console.log(number_list[x]);
    x++;
}