"use strict";
const students = [
  {
    name: "John",
    id: "2345768",
  },
  {
    name: "Paul",
    id: "2134657",
  },
  {
    name: "Jones",
    id: "5423679",
  },
];

const select = document.getElementById("target")

for (let x = 0; x < students.length; x++) {
    let id = students[x]["id"]
    let name = students[x]["name"]
    let option = document.createElement("option")
    option.innerHTML = `<option value=\`${id}\`>\`${name}\`</option>`
    select.appendChild(option)
}