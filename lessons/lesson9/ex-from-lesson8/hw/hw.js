let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let a = document.getElementById("answer");

function b1Click(event) {
    a.textContent = "That's great 😊";
}

function b2Click(event) {
    a.textContent = "Oh that sucks 😥";
}

let name = prompt("What is your name?");
let greetingEl = document.getElementById("greeting");
greetingEl.textContent = "Hello, " + name + "!!!";
