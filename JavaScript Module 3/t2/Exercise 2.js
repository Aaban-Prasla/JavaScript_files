"use strict";

const ul = document.getElementById("target");

const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");

li1.innerText = "First Item"
li2.innerText = "Second Item"
li3.innerText = "Third Item"

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3)