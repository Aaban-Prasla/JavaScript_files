"use strict";

const year = parseInt(prompt("Enter a year."));

if (year % 100 === 0) {
    if (year % 4 === 0 && year % 400 === 0) {
        document.querySelector("#year").innerHTML = `The year ${year} is a leap year.`;
    }
}

else if (year % 4 === 0) {
        document.querySelector("#year").innerHTML = `The year ${year} is a leap year.`;
}

else {
    document.querySelector("#year").innerHTML = `The year ${year} is not a leap year.`;
}