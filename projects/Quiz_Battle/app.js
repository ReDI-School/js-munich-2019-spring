/*
let collection = document.querySelector(".collection");

let questions = [{
    question: "what is current country you live?",
    answers: ["Egypt", "Germany", "Japan", "Brazil"],
    correctAnswerIndex: 1
}, {
    question: "what is currency of egypt?",
    answers: ["Euro", "Pound", "Yen", "Real"],
    correctAnswerIndex: 1

}, {
    question: "what is best football team in the world?",
    answers: ["Japan", "Germany", "Brazil", "Egypt"],
    correctAnswerIndex: 2
}];
let score = 0;

let startIndex = 0;
//getRandomNumber(0,questions.length);


window.addEventListener('DOMContentLoaded', getQuestion);

function getQuestion() {

    let questionUI = document.querySelector(".question");


    questionUI.textContent = questions[startIndex].question;

    let i = startIndex;

    questions[i].answers.forEach(function (singleAnswers) {


        let list = document.createElement("li");

        list.classList.add("collection-item");

        list.innerHTML = "<button>" + singleAnswers + "</button>";
        collection.appendChild(list);

    });

    scoreNumber.textContent = score + "/" + (questions.length);
}



collection.addEventListener("click", selectAnswer);

function selectAnswer(e) {
    let correctSolutionIndex = questions[startIndex].correctAnswerIndex,
        correctAnswer = questions[startIndex].answers[correctSolutionIndex],
        collectionChildren = Array.from(collection.children);

    if (e.target.textContent === correctAnswer) {

        score++;

        e.target.classList.add("correct");

        collectionChildren.forEach(function (singleChildList) {

            singleChildList.querySelector("button").setAttribute("disabled", "true");

        });

    } else {
        collectionChildren.forEach(function (singleChildList) {

            singleChildList.querySelector("button").setAttribute("disabled", "true");

        });

        e.target.classList.add("wrong");

    };

    let scoreNumber = document.querySelector("#scoreNumber");

    scoreNumber.textContent = score + "/" + (questions.length);
}

// next question


let nextQuestionBtn = document.querySelector(".nextQuestionBtn");
nextQuestionBtn.addEventListener("click", nextQuestion);
function nextQuestion() {

    startIndex++;

    if (startIndex >= (questions.length - 1)) {
        nextQuestionBtn.setAttribute("disabled", "true");

    }
    previousQuestionBtn.removeAttribute("disabled");
    let questionUI = document.querySelector(".question");

    questionUI.textContent = questions[startIndex].question;
    collection.innerHTML = "";
    getQuestion();

}



// previous Question


let previousQuestionBtn = document.querySelector(".previousQuestionBtn");
previousQuestionBtn.addEventListener("click", previousQuestion);
function previousQuestion() {

    startIndex--;
    score --;
    if (startIndex <= 0) {
        score = 0;
        startIndex = 0;
        previousQuestionBtn.setAttribute("disabled", "true");
    }
    nextQuestionBtn.removeAttribute("disabled");
    let questionUI = document.querySelector(".question");

    
    questionUI.textContent = questions[startIndex].question;
    collection.innerHTML = "";
    getQuestion();
    
    

}



// get random number

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
*/

// questions object

let questions = [{
    question: "In what country was Nelson Mandela born?",
    answers: ["South Africa", "England", "India", "China"],
    rightSolutionIndex: 0
},
{
    question: "Adidas and Volkswagen are companies from what country?",
    answers: [ "Turkey", "Germany", "New Zealand", "Switzerland"],
    rightSolutionIndex: 1
},
{

    question: "Zurich is the largest city in what country?",
    answers: [ "Ireland", "France", "Belgium","Switzerland"],
    rightSolutionIndex: 3
}, 
{
    question: "In what country is the Great Pyramid of Giza found?",
    answers: ["Brazil", "USA", "Japan", "Egypt"],
    rightSolutionIndex: 3

}, 
{
    question: " In what country would you find the cities Lyon and Marseille?",
    answers: ["France", "Romania", "Estonia", "New Zealand"],
    rightSolutionIndex: 0
}, 
{
    question: "Leonardo da Vinci was born in what country?",
    answers: ["Belgium", "Italy", "Switzerland", "South Africa"],
    rightSolutionIndex: 1
}, 
{
    question: "What country has the second largest population in the world?",
    answers: ["India", "Egypt", "Germany", "Brazil"],
    rightSolutionIndex: 0

}, 
{
    question: "In what country would you find the cities Glasgow and Edinburgh?",
    answers: ["Ghana", "Scotland", "Jaban", "korea"],
    rightSolutionIndex: 1

}, 
{
    question: "What country has a maple leaf on their national flag?",
    answers: ["South Africa", "France", "Canada", "Russia"],
    rightSolutionIndex: 2

}, 
{
    question: "What country is home to the Great Barrier Reef?",
    answers: ["Egypt", "Germany", "Turkey", "Australia"],
    rightSolutionIndex: 3
},
{
    question: "Tapas and paella are dishes that originated in what country?",
    answers: ["Spain", "Sri Lanka", "Brazil", "Egypt"],
    rightSolutionIndex: 0
},
{
    question: "What country was the first to land a man on the moon?",
    answers: [ "China", "Turkey","USA", "Canada"],
    rightSolutionIndex: 2
}, 
{
    question: "What is the largest country (by size and population) in South America?",
    answers: ["Brazil", "Argentina", "Coba", "Bolivia"],
    rightSolutionIndex: 0
}, 
{
    question: "In what country is the Yangtze River found?",
    answers: ["sinegal", "China", "Egypt", "The Sudan"],
    rightSolutionIndex: 1
}, 
{
    question: "The kiwi is a flightless bird that lives in what country?",
    answers: ["USA", "Austria", "New Zealand" ,"Germany"],
    rightSolutionIndex: 2
},
{
    question: " In what country would you find the islands Santorini and Mykonos?",
    answers: ["Denmark", "Greece", "france", "Switzerland"],
    rightSolutionIndex: 1
}];


// get UI Elements and start question point

let questionTitle = document.querySelector(".questionTitle"),
    questionsAnswers = document.querySelector(".questionsAnswers"),
    score = document.querySelector(".score"),
    scoreNumber = document.querySelector("#scoreNumber"),
    startScore = 0,
    startQuestion = 0;

// display question and build UI
displayQuestion();
function displayQuestion(){

    // display question title
    questionTitle.textContent = questions[startQuestion].question;

    questionsAnswers.innerHTML="";
    // display question Answers and build some UI
    questions[startQuestion].answers.forEach(function(answer){

        let answerList = document.createElement("li"),
            button = document.createElement("button"),
            answerText = document.createTextNode(answer);

            // add Class to list
            answerList.classList.add("collection-item");

            // append list inside UL
            questionsAnswers.appendChild(answerList);

            // append button inside List
            answerList.appendChild(button);

            // append text inside button
            button.appendChild(answerText);            

    });


};

// selectAnswer

questionsAnswers.addEventListener("click",selectAnswer);

function selectAnswer(e){

    let questionRightAnswer = questions[startQuestion].rightSolutionIndex;
    let clickedElement = e.target;

    
    //check if text inside clicked list is the same with answer
    if(clickedElement.textContent === questions[startQuestion].answers[questionRightAnswer]){

        clickedElement.classList.add("correct");
        // score result
        getScore();
    }else{

        clickedElement.classList.add("wrong");
    }

    let listElements = document.querySelectorAll(".questionsAnswers li button");
    
    listElements.forEach(function(listElement){

        listElement.setAttribute("disabled","true");

    });

}

// get Score
function getScore(){
    startScore +=1;
    scoreNumber.textContent = startScore;

}

// next Question

let nextQuestionBtn = document.querySelector(".nextQuestionBtn");

nextQuestionBtn.addEventListener("click",nextQuestion);


function nextQuestion(){

 if(startQuestion < (questions.length-1)){

    startQuestion++;
    countdown = 10;
    displayQuestion();
   
 }else{


    finalResult();

 }
 
}


function finalResult(){
    countdownContainer.classList.add("hide");
    questionTitle.classList.add("hide");
    nextQuestionBtn.classList.add("hide");
    questionsAnswers.classList.add("hide");    

    startPlayAgain.classList.add("show");

    score.children[0].innerHTML = "Your Final Result : " + startScore;

   

}


// timer to go to next question after 10 seconds.

setInterval(nextQuestion,10000);

// play Againg
let startPlayAgain = document.querySelector(".startPlayAgain"),
    playAgainBtn = document.querySelector(".playAgainBtn");

    startPlayAgain.addEventListener("click",playAgain);

function playAgain(){

        document.location.reload(true);

}

// counter

let countdownNumberEl = document.getElementById('countdown-number'),
 countdown = 10,
 countdownContainer = document.querySelector("#countdown");

countdownNumberEl.textContent = countdown + "Seconds";


setInterval(function() {
  countdown = --countdown <= 0 ? 10 : countdown;

  countdownNumberEl.textContent = countdown + "Seconds";
}, 1000);
