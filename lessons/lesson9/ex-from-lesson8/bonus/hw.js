let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let a = document.getElementById("answer");

function b1Click(event) {
    a.textContent = "That's great 😊";
    removeGreeting();
    changeAnswerBackground(true);
}

function b2Click(event) {
    a.textContent = "Oh that sucks 😥";
    removeGreeting();
    changeAnswerBackground(false);
}

function removeGreeting() {
    let questionEl = document.getElementById("question");
    questionEl.hidden = true;
}

function changeAnswerBackground(isGood) {
    let answerEl = document.getElementById("answer");

    if (isGood) {
        answerEl.classList.add("good")
        answerEl.classList.remove("bad")
    } else {
        answerEl.classList.add("bad")
        answerEl.classList.remove("good")
    }
}

let name = prompt("What is your name?");
let greetingEl = document.getElementById("greeting");
greetingEl.textContent = "Hello, " + name + "!!!";
