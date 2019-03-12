let answerEl = document.getElementById("answer");

function onGoodBtnClick(event) {
    answerEl.textContent = "That's great 😊";
    removeGreeting();
    changeAnswerBackground(true);
}

function onBadBtnClick(event) {
    answerEl.textContent = "Oh that sucks 😥";
    removeGreeting();
    changeAnswerBackground(false);
}

function removeGreeting() {
    let questionEl = document.getElementById("question");
    questionEl.hidden = true;
}

function changeAnswerBackground(isGood) {
    if (isGood) {
        className = "good";
    } else {
        className = "bad";
    }
    answerEl.className = className;
}

let name = prompt("What is your name?");
let greetingEl = document.getElementById("greeting");
greetingEl.textContent = "Hello, " + name + "!!!";
