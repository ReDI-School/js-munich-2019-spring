let noon = 12;

showCurrentTime();

function refreshClicked(){
  showCurrentTime();
}

function showCurrentTime(){
  let clock = document.getElementById("clock");

  let currentTime = new Date();

  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  let meridian = "AM";

  if(hours >= noon){
    meridian = "PM";
  }

  if (hours > noon){
    hours = hours - 12;
  }

  if( minutes < 10){
    minutes = "0" + minutes;
  }

  if (seconds < 10){
    seconds = "0" + seconds;
  }

   // put together the string that displays the time
   var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;
 
   clock.textContent = clockTime;
}
