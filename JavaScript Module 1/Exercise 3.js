"use strict";

const number_1 = parseInt(prompt("Enter a number."));
const number_2 = parseInt(prompt("Enter a number."));
const number_3 = parseInt(prompt("Enter a number."));

const sum = number_1 + number_2 + number_3;
const product = number_1 * number_2 * number_3;
const average = (number_1 + number_2 + number_3)/3

document.querySelector("#numbers").innerHTML = `The sum is ${sum}, the product is ${product}, the average is ${average}.`;