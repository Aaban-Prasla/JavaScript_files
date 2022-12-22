"use strict";

let initial_img = document.getElementById("trigger");
let final_img = document.getElementById("target");

function img_change(){
    final_img.src = "img/picB.jpg"
}

initial_img.addEventListener("mouseover", img_change)