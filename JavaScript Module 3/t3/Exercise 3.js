"use strict";

const names = ["John", "Paul", "Jones"];
const name_list = document.getElementById("target")

for (let x = 0; x < names.length; x++) {
    let li = document.createElement("li")
    li.innerHTML = `<li>${names[x]}</li>`
    name_list.appendChild(li)
}