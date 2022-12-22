"use strict";

let number_list = [];

while (true) {
    const number = parseInt(prompt("Enter a number. Press 0 to exit."));
    if (number === 0) {
        break;
    }
    else {
        number_list.push(number);
    }
}

number_list.sort();
number_list.reverse();

let x = 0;

while (x < number_list.length) {
    console.log(number_list[x]);
    x++;
}