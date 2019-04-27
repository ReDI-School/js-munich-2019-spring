let boardElement = document.querySelector(".boardArea");
let circleElement= document.getElementById("circle");
let cursor = document.getElementById("pointer");
let pointsElement=document.getElementById("points");
let timerElement=document.getElementById("timer");

//to track cursor movement and place cat image in cursor position
function trackCursorMove(e){
  //console.log(e);
  if(e.clientX > (boardElement.clientWidth) || e.clientY >(boardElement.clientHeight)){
    
  } else{
    cursor.setAttribute("style", "top: "+(e.clientY-50)+"px; left: "+(e.clientX-50)+"px;")
  }

}

//to move cute mouse to some random position
let h = boardElement.clientHeight - 40;
let w = boardElement.clientWidth - 40;
let posX=40;
let posY=40;

function moveImage(){
  let nh = Math.floor(Math.random() * h)/100;
  let nw = Math.floor(Math.random() * w)/100;
  if(posX>=w || posY>=h ){
    posX=Math.floor(Math.random() * w);
    posY=Math.floor(Math.random() * h);
  }else{
    posX+=nw;
    posY+=nh;
  }
  circleElement.setAttribute("style","top:"+posY +"px;left:"+posX+"px");
}

//calculate the number of clicks on cute mouse
let circleCounter=0;
function onCircleClick(){ 
  circleCounter+=1;
  let cNote = document.getElementById("cAudio");
  cNote.currentTime=0;
  cNote.play();
  pointsElement.textContent=circleCounter;
}

//play backgroundMusic 
function playBackgroundMusic(){
  let backgroundMusic=document.getElementById("backgroundMusic");
  if(backgroundMusic.currentTime===0){
    backgroundMusic.play();
  }else{
    backgroundMusic.currentTime=0;
    backgroundMusic.pause();  
  }
  
}

function displayResult(){
  let resultElement=document.getElementsByClassName("result")
  for(i=0;i<resultElement.length;i++){
    resultElement[i].style.visibility="visible";
  }
  let resultData=document.getElementById("result_data");
  let resultScore=document.getElementById("result_score");
  if(circleCounter>8){
    resultData.innerHTML="Wow Congratulations " + userName + "!!!!You are really super fast and accurate!!!!.";
  }else if(circleCounter>0 && circleCounter<=8){
    resultData.innerHTML="Congratulations " + userName + "!!!!! You Won!!!";
  }else{
    resultData.innerHTML="Sorry " + userName + "!!! Better luck next time";
  }
  resultScore.innerHTML="Score: " + circleCounter +"---- Time taken: "+ timerElement.textContent;
 }

let userName;
function startGame(){
  userName=prompt("Enter your name:");
  if(userName!=null){
    userName=userName.trim();
  }
  if(userName ==="" || userName===null){
    userName="Anonymous";
  }
  let imageMoveId=setInterval(moveImage,50);
  //count down timer
  let timer=Number(timerElement.textContent);
  let countdown = setInterval(function() {
    timer++;
    timerElement.textContent = timer;
   if (timer >= 15){
    clearInterval(countdown);
    clearInterval(imageMoveId);
    boardElement.removeEventListener("mousemove",trackCursorMove);
    displayResult();
   } 
  }, 1000);
}

startGame();
//document.addEventListener("DOMContentLoaded", playBackgroundMusic);
circleElement.addEventListener("click",onCircleClick);
boardElement.addEventListener("click",trackCursorMove);
