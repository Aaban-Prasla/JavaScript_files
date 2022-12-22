"use strict";

const Gryffindor = 1;
const Slytherin = 2;
const Hufflepuff = 3;
const Ravenclaw = 4;

const name = prompt("Enter your name.");

let House = Math.floor(Math.random() * 5);

switch (House) {
    case Gryffindor:
        document.querySelector("#name").innerHTML = `${name}, your house is Gryffindor.`
        break;
    case Slytherin:
        document.querySelector("#name").innerHTML = `${name}, your house is Slytherin.`
        break;
    case Hufflepuff:
        document.querySelector("#name").innerHTML = `${name}, your house is Hufflepuff.`
        break;
    case Ravenclaw:
        document.querySelector("#name").innerHTML = `${name}, your house is Ravenclaw.`
}