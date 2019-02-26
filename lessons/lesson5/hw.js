// Guessing game

// start with 3 lives
let initialLives = 3;

// let's select one value between 0 and 10, we could do that also randomly
let correctValue = 8;

// rules of our game - in a re-usable function
function playAnotherRound(remainingLives) {
  if (remainingLives === 0) {
    alert("You lost - try again!");
  } else {
    let userGuess = prompt("Please tell me a number between 0 and 10.");
  
    if (userGuess > correctValue) {
      alert("Too high! Lower please.");
      playAnotherRound(remainingLives - 1);
    } else if (userGuess < correctValue) {
      alert("Too low! Higher please.");
      playAnotherRound(remainingLives - 1);
    } else {
      alert("You won!");
    }
  }
}

// let's start playing - shall way?
playAnotherRound(initialLives);