"use strict";

let number_list = []

for (let x = 0; x < 5; x++) {
    const number = parseInt(prompt("Enter a number."))
    number_list.push(number)
}

for (let x = number_list.length; x >= 0; x--) {
    console.log(number_list[x])
}